export default function CVPreview({personal, education, practical, onClick}) {
    return (
        <div id="preview">
            {personal && 
            <div id="header">
                <h1>{personal.firstName + ' ' + personal.lastName}</h1>
                <p>{personal.phone + ' | ' + personal.email + ' | ' + personal.linkedin + ' | ' + personal.github}</p>
            </div>
            }
            <h2>EDUCATION</h2>
            {education && 
            <div id="education">
                <div id="schoolLocation">
                    <p>{education.school}</p>
                    <p>{education.location}</p>
                </div>
                <div id="majorDate">
                    <p>{education.major}</p>
                    <p>{education.startDate + '-' + education.endDate}</p>
                </div>
            </div>
            }
            {practical && 
            <div id="practical">
                <h2>WORK EXPERIENCE</h2>
                <p>{practical.companyName}</p>
                <p>{practical.positionTitle}</p>
                <p>{practical.fromDate}</p>
                <p>{practical.untilDate}</p>
                <p>{practical.responsibilities}</p> 
            </div>
            }
            <button onClick={onClick}>Edit</button>
        </div>
    )
}