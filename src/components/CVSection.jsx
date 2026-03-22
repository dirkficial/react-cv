import { useState } from "react"

export default function CVSection({ fields, initialValues, onSectionSubmit}) {
    const [values, setValues] = useState(initialValues);
    const [isEditing, setIsEditing] = useState(true);

    function onChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
        onSectionSubmit(values);
    }

    if (!isEditing) {
        return (
            <div>
                {fields.map((field) => (
                    <p key={field.name}>{field.label}: {values[field.name]}</p>
                ))}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                {fields.map((field) => (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}:</label>
                        {field.type === "textarea" ? (
                            <textarea
                                name={field.name}
                                id={field.name}
                                value={values[field.name]}
                                onChange={onChange}
                            />
                        ) : field.pattern != "null" ? (
                            <input
                                type={field.type}
                                name={field.name}
                                id={field.name}
                                value={values[field.name]}
                                onChange={onChange}
                                pattern={field.pattern}
                            />
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                id={field.name}
                                value={values[field.name]}
                                onChange={onChange}
                            />
                        )}
                    </div>
                ))}
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
