import { useState } from "react"

export default function EduExperience() {
    const [educationExp, setEducationExp] = useState({school : "", major : "", startDate : "", endDate : ""})

    function onChange(e) {
        setEducationExp({...educationExp, [e.target.name] : e.target.value})
    }
    
    return (
        <div id="eduExperience">
            <form action="">
                <label htmlFor="">School Name:</label>
                <input type="text" name="school" id="school" value = {educationExp.school} onChange={onChange}/>

                <label htmlFor="">Title of Study:</label>
                <input type="text" name="major" id="major" value = {educationExp.major} onChange = {onChange}/>

                <label htmlFor="">Start Date of Study</label>
                <input type="date" name="startDate" id="startDate" value = {educationExp.startDate} onChange = {onChange}/>

                <label htmlFor="">End Date of Study</label>
                <input type="date" name="endDate" id="endDate" value = {educationExp.endDate} onChange = {onChange}/>
            </form>
        </div>
    )
}
