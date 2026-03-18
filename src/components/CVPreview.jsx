export default function CVPreview({personal, education, experience}) {
    return (
        <div>
            <div id="header">
                <h1>{personal.firstName + '' + personal.lastName}</h1>
                
            </div>
        </div>
    )
}