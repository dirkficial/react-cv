import CVSection from "./CVSection"

const fields = [
    { label: "School Name", name: "school", type: "text" },
    { label: "Title of Study", name: "major", type: "text" },
    { label: "Start Date of Study", name: "startDate", type: "date" },
    { label: "End Date of Study", name: "endDate", type: "date" },
]

const initialValues = { school: "", major: "", startDate: "", endDate: "" }

export default function EduExperience() {
    return <CVSection fields={fields} initialValues={initialValues} />
}
