import CVSection from "./CVSection"

const fields = [
    { label: "School Name", name: "school", type: "text" },
    { label: "School Location", name: "location", type: "text"},
    { label: "Title of Study", name: "major", type: "text" },
    { label: "Start Date of Study", name: "startDate", type: "month" },
    { label: "End Date of Study", name: "endDate", type: "month" },
]

const initialValues = { school: "", location: "", major: "", startDate: "", endDate: "" }

export default function EduExperience({info, onSectionSubmit}) {

    function handleSubmit(values) {
        onSectionSubmit({education : values})
    }

    return (
    <div>
        {info != null ?         
        <CVSection fields={fields} initialValues={info} onSectionSubmit={handleSubmit}/>
        : 
        <CVSection fields={fields} initialValues={initialValues} onSectionSubmit={handleSubmit}/>
        }
    </div>
    )
}
