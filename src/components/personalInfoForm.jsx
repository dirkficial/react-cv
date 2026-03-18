import CVSection from "./CVSection"

const fields = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone", name: "phone", type: "tel"}
]

const initialValues = { firstName: "John", lastName: "Doe", email: "johndoe@email.com", phone: "123-456-7890" }

export default function PersonalInfo({onSectionSubmit}) {

    function handleSubmit(values) {
        onSectionSubmit({personal : values})
    }

    return <CVSection fields={fields} initialValues={initialValues} onSectionSubmit={handleSubmit}/>
}
