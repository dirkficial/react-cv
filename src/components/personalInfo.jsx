import { useState } from "react"

export default function PersonalInfo() {
    const [personalInfo, setPersonalInfo] = useState({firstName : "John", lastName : "Doe", email : "johndoe@email.com"})
    

    function onChange(e) {
        setPersonalInfo({...personalInfo, [e.target.name] : e.target.value})
    }
    return (
        <div id="personalInfo">
            <form>
                <label htmlFor="">First Name:</label>
                <input type=" text" name = "firstName" id = "firstName" value = {personalInfo.firstName} onChange = {onChange}/>

                <label htmlFor="">Last Name:</label>
                <input type="text" name = "lastName" id = "lastName" value = {personalInfo.lastName} onChange = {onChange}/>

                <label htmlFor="">Email:</label>
                <input type= "email" name = "email" id = "email" value = {personalInfo.email} onChange = {onChange}/>
            </form>
        </div>
    )
}
