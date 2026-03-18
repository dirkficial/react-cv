import CVSection from "./CVSection"

const fields = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Email", name: "email", type: "email" },
]

const initialValues = { firstName: "John", lastName: "Doe", email: "johndoe@email.com" }

export default function PersonalInfo() {
    return <CVSection fields={fields} initialValues={initialValues} />
}
