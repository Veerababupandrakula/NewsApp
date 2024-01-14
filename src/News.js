export default function News(props){
    return (
        <div className="grid-container">
        <div> 
            <h3>{props.article.title}</h3>
            <img src={props.article.urlToImage} alt={"news Image"} width={400}/>
            <p>{props.article.description?.substring(0,100).concat("......") 
            } <a href={props.article.url} target="blank">read more</a></p> 
        </div>
        </div>
        
        
    )
}