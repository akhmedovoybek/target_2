import "./Details.css"
import description from "./description";
function Details() {
    return (
        <div className="details-container px-60">
        <div className="overview-div">
            <img src={description.img} alt={`${description.img} logo`} />
            <div><strong>Name: </strong> {description.name}</div>
            <div><strong>Location:</strong> {description.location}</div>
            <div><strong>Tuition:</strong> {description.tuition}</div>
            <div><strong>Ranking:</strong> {description.ranking}</div>
            <div><strong>GPA:</strong> {description.gpa}</div>
            <div className="description-box">
                <strong>Description:</strong>
                <p>{description.description}</p>
            </div>
        </div>
    </div>
    )
}

export default Details;