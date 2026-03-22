# React CV Builder

A CV/resume builder built with React as part of [The Odin Project](https://www.theodinproject.com/) curriculum. Users fill out their personal info, education, and work experience, then preview the formatted CV.

## What I Built

The app has two modes:

- **Edit mode** — three forms (personal info, education, work experience) each with a save/edit toggle
- **Preview mode** — a formatted CV view assembled from the submitted data, with an Edit button to go back

## What I Learned

### Lifting State Up
All form data lives in `App.jsx` as a single `info` object with `personal`, `education`, and `practical` keys. Each form section calls an `onSectionSubmit` callback to push its data up to the parent, which merges it in with the spread operator:

```js
setInfo({ ...info, ...sectionInfo })
```

This keeps the state centralized so `CVPreview` can read from one source of truth.

### Controlled Components
Every input is a controlled component — its value is bound to state, and `onChange` updates state on every keystroke. This means React always owns the form data, making it straightforward to pass values back up or repopulate the form when re-entering edit mode.

### Reusable Components via Config Props
Rather than writing separate form JSX for each section, I built a generic `CVSection` component that accepts a `fields` array describing what inputs to render:

```js
const fields = [
  { label: "School Name", name: "school", type: "text" },
  { label: "Start Date", name: "startDate", type: "month" },
  ...
]
```

`CVSection` maps over this array to render the form dynamically. It also handles its own `isEditing` toggle, so each section can be independently edited and saved. The tradeoff is that specific field behavior (like `textarea` vs `input`) has to be encoded in the config.

### Conditional Rendering
The app uses a simple boolean `editMode` in state to switch between the edit forms and the preview. Within the preview, each section only renders if its data exists (`{personal && <div>...</div>}`), so the CV doesn't show empty blocks before forms are submitted.

### Props and Component Composition
Data flows strictly top-down through props. `CVPreview` receives the three data slices as separate props. Each form component (`PersonalInfo`, `EduExperience`, `PracticalExperience`) wraps `CVSection` and is responsible for knowing its own field config and how to namespace the data it submits.

## Tech Stack

- React (with Vite)
- Plain CSS

## Project Structure

```
src/
  App.jsx                        — root state, edit/preview toggle
  components/
    CVSection.jsx                — reusable form/display section
    personalInfoForm.jsx         — personal info fields + submit handler
    eduExperienceForm.jsx        — education fields + submit handler
    practicalExperienceForm.jsx  — work experience fields + submit handler
    CVPreview.jsx                — formatted CV preview
  styles/
    index.css
```
