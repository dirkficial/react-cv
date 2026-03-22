import PersonalInfo from './components/personalInfoForm.jsx'
import EduExperience from './components/eduExperienceForm.jsx';
import PracticalExperience from './components/practicalExperienceForm.jsx';
import CVPreview from './components/CVPreview.jsx';
import { useState } from 'react';


export default function App() {
    const [editMode, setEditMode] = useState(false);
    const [info, setInfo] = useState({personal : null, education : null, practical : null})

    function onSectionSubmit(sectionInfo) {
       setInfo({...info, ...sectionInfo})
    }
    
    function togglePreview() {
        setEditMode(false);
    }

    function toggleEdit() {
        setEditMode(true);
    }

    if (!editMode) {
        return <CVPreview personal={info.personal} education={info.education} practical={info.practical} onClick={toggleEdit}/>
    }

    return (
        <div>
            <PersonalInfo info={info.personal} onSectionSubmit={onSectionSubmit}/>
            <EduExperience info={info.education} onSectionSubmit={onSectionSubmit}/>
            <PracticalExperience info={info.practical} onSectionSubmit={onSectionSubmit}/>
            <button onClick={togglePreview}>Preview</button>
        </div>
    )
}
