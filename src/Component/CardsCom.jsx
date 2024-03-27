

function CardComponent(Props){

    return(
        <div className="CardCom">
            <div id="img">
                <img id="img_2" src={Props.Img} alt="" />
                    
                <div id="tt">
                    <div id="title">{Props.title}</div>
                    <h4 id="genre">{Props.genre}</h4>
                    <div>{Props.date}</div>
                </div>
            </div>
        
        </div>
    )
}
export default CardComponent