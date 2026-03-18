import PersonalInfo from './components/personalInfoForm.jsx'
import EduExperience from './components/eduExperienceForm.jsx';
import PracticalExperience from './components/practicalExperienceForm.jsx';
import { useState } from 'react';


export default function App() {
    const [editMode, setEditMode] = useState(false);

    return (
        <>
            <PersonalInfo/>
            <EduExperience/>
            <PracticalExperience/>
        </>
    )
}
