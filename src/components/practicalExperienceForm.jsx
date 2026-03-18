import CVSection from "./CVSection"

const fields = [
    { label: "Company Name", name: "companyName", type: "text" },
    { label: "Position Title", name: "positionTitle", type: "text" },
    { label: "Main Responsibilities", name: "responsibilities", type: "textarea" },
    { label: "Date Worked From", name: "fromDate", type: "date" },
    { label: "Date Worked Until", name: "untilDate", type: "date" },
]

const initialValues = { companyName: "", positionTitle: "", responsibilities: "", fromDate: "", untilDate: "" }

export default function PracticalExperience({info, onSectionSubmit}) {

    function handleSubmit(values) {
        onSectionSubmit({practical : values})
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
