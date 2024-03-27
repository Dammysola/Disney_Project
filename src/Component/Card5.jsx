




function CardComponent5(Props){

    return(
        <div className="CardCom">
            <div id="img">
                <img id="img_5" src={Props.Img} alt="" />
                    
                <div id="">
                    <div id="title">{Props.title}</div>
                    <h4 id="genreee">{Props.genre}</h4>
                    <div>{Props.date}</div>
                </div>
            </div>
        
        </div>
    )
}
export default CardComponent5