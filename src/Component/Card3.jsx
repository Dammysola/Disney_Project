


function CardComponent3(Props){

    return(
        <div>
        <div id="img">
            <img id="img_4" src={Props.Img} alt="" />
                
           <div id="ttt">
                <p id="title">{Props.title}</p>
                <h4 id="genreee">{Props.genre}</h4>
            </div>
        </div>
        
    </div>
    )
}
export default CardComponent3