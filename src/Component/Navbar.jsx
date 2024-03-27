

function Nav (){

    return(
        <div className="nav">
            <img className="disney_nav" src="./src/assets/Images/disney2.jpg" alt="" />
            <div className="navv">
                <h5 className="link">Disney Plus</h5>
                <h5 className="link">Shopping</h5>
                <h5 className="link">Movie</h5>
                <h5 className="link">TV</h5>
                <h5 className="link">Parks & Resorts</h5>
                <h5 className="link">Music</h5>
                <h5 className="link">Live & Events</h5>
                <h5 className="link">Game</h5>
                <h5 className="link">Menu</h5>
            </div>
            <div id="search_div">
                <input type="search" name="" placeholder="search within the sit" id="search" />
                <button id="btn"></button>
            </div>
        </div>
    )
}
export default Nav