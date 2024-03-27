import Card_Image_One from "./Card_Image_One"
import Card_Image_Three from "./Card_Image_Three"
import Card_Image_Two from "./Card_Image_Two"



function Card (){
    const Image = [
        {image:'./src/assets/Images/disney2.jpg'},
        {image:'./src/assets/Images/pixar.jpg'},
        {image: './src/assets/Images/Marvel.jpg'}, 
        {image:'./src/assets/Images/star_wars.jpg'}
    ]
    const Image2 = [
        {special:'./src/assets/Images/special_1.jpg'},
        {special:'./src/assets/Images/special_2.jpg'},
        {special: './src/assets/Images/special_3.jpg'}, 
        {special:'./src/assets/Images/special_4.jpg'},
        {special:'./src/assets/Images/special_5.jpg'}
    ]
    const Image3 = [
        {character:'./src/assets/Images/character_1.png'},
        {character:'./src/assets/Images/character_2.png'},
        {character: './src/assets/Images/character_3.png'}, 
        {character:'./src/assets/Images/character_4.png'},
        {character:'./src/assets/Images/character_5.png'},
        {character:'./src/assets/Images/character_6.png'},
        {character:'./src/assets/Images/character_7.png'},
        {character:'./src/assets/Images/character_8.png'},
        {character: './src/assets/Images/character_9.png'}, 
        {character:'./src/assets/Images/character_10.png'},
        {character:'./src/assets/Images/character_12.png'},
        {character:'./src/assets/Images/character_13.png'},
        {character:'./src/assets/Images/character_14.png'},
        {character:'./src/assets/Images/character_15.png'},
        {character: './src/assets/Images/character_16.png'}, 
        {character:'./src/assets/Images/character_17.png'},
        {character:'./src/assets/Images/character_18.png'},
        {character:'./src/assets/Images/character_19.png'}
    ]
    






    return(
        
       <div>
        
            <div id="main_div" >
                {
                    Image.map((obb)=>{
                        return(
                            <p><Card_Image_One
                            image = {obb.image}
                            /></p>
                        )
                    })
                }
            </div>

            
            <div>
                <h2 className="header">Special</h2>
                <div id="main">
                    {
                        Image2.map((obb2)=>{
                            return(
                                <Card_Image_Two
                                special = {obb2.special}
                                />
                            )
                        })
                    }
                    
                </div>
            </div>

            <div id="Character_main_div">
                <h2 className="header">Character Products</h2>
                <div id="main_1">
                    {
                        Image3.map((obb3)=>{
                            return(
                                <Card_Image_Three
                                character = {obb3.character}
                                /> 
                            )
                        }) 
                    } 
                </div>

                {/* <div id="main_1">
                {
                    Image4.map((obb3)=>{
                        return(
                            <p><Card_image
                            character = {obb3.character}
                            /></p>
                        )
                    })
                }
                </div>
                <div id="main_1">
                {
                    Image5.map((obb4)=>{
                        return(
                            <p><Card_image
                            character = {obb4.character}
                            /></p>
                            
                        )
                    })
                }
                </div> */}
            </div>
       </div>
    )
}
export default Card