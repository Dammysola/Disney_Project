


function CardComponent4(Props){

    return(
        <div className="CardCom">
            <div id="img">
                <img id="img_2" src={Props.Img} alt="" />
                    
                <div id="tt4">
                    <div id="title">{Props.title}</div>
                    <div id="genre">{Props.genre}</div>
                </div>
            </div>
        
        </div>
    )
}
export default CardComponent4