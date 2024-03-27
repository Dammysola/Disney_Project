

function CardComponent2(Props){

    return(
        <div>
        <div id="img">
            <img id="img_3" src={Props.Img} alt="" />
                
           <div id="tt2">
                <p className="News_date">{Props.title}</p>
                <h4 id="genree">{Props.genre}</h4>
                <div className="News_date">{Props.date}</div>
            </div>
        </div>
        
    </div>
    )
}
export default CardComponent2