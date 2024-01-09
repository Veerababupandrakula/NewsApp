export default function News(props){
    return (
        <div className="grid-container">
        <div className="grid-item">
            <img src={props.article.urlToImage} alt={props.title}/>
            <h3>{props.article.title}</h3>
            <p>{props.article.description?.substring(0,100).concat("......") 
            } <a href={props.article.url} target="blank">read more</a></p> 
        </div>
        </div>
        
    )
}