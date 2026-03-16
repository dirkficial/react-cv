import { useState } from "react"

export default function PracticalExperience(){
     const [practicalExp, setPracticalExp] = useState({companyName : "Company Name", 
                                                positionTitle : "Position Title",
                                                responsibilities : "Main Responsibilities",
                                                fromDate : "",
                                                untilDate : ""});

    function onChange(e) {
        setPracticalExp({...practicalExp, [e.target.name] : e.target.value});
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">Company Name:</label>
                <input type="text" name="companyName" id="companyName" value={practicalExp.companyName} onChange={onChange}/>

                <label htmlFor="">Position Title:</label>
                <input type="text" name="positionTitle" id="positionTitle" value={practicalExp.positionTitle} onChange={onChange}/>

                <label htmlFor="">Main Responsibilities:</label>
                <input type="text" name="responsibilities" id="responsibilities" value={practicalExp.responsibilities} onChange={onChange}/>

                <label htmlFor="">Date Worked From:</label>
                <input type="date" name="fromDate" id="fromDate" value={practicalExp.fromDate} onChange={onChange}/>

                <label htmlFor="">Date Worked Until:</label>
                <input type="date" name="untilDate" id="untilDate" value={practicalExp.untilDate} onChange={onChange}/>
            </form>
        </div>
    )
}

function LabelInput({ title, inputType = "text", inputName, id, val, onChangeFn }) {
    return (
        <>
            <label htmlFor={id}>{title}</label>
            <input 
                type={inputType} 
                name={inputName} 
                id={id} 
                value={val} 
                onChange={onChangeFn} 
            />
        </>
    );
}