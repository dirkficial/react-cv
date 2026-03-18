export default function CVPreview({personal, education, practical}) {
    return (
        <div>
            {personal && 
            <div id="header">
                <h1>{personal.firstName + ' ' + personal.lastName}</h1>
                <p>{personal.phone}</p>
                <p>{personal.email}</p>
            </div>
            }
            {education && 
            <div id="education">
                <h2>EDUCATION</h2>
                <p>{education.school}</p>
                <p>{education.major}</p>
                <p>{education.startDate + '-' + education.endDate}</p>
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
        </div>
    )
}