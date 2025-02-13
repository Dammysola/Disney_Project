import Card_Image_One from "./Card_Image_One"
import Card_Image_Three from "./Card_Image_Three"
import Card_Image_Two from "./Card_Image_Two"
import disney2 from "../assets/Images/disney2.jpg"
import Marvel from "../assets/Images/Marvel.jpg"
import pixar from "../assets/Images/pixar.jpg"
import star_wars from "../assets/Images/star_wars.jpg"
import special_1 from "../assets/Images/special_1.jpg"
import special_2 from "../assets/Images/special_2.jpg"
import special_3 from "../assets/Images/special_3.jpg"
import special_4 from "../assets/Images/special_4.jpg"
import special_5 from "../assets/Images/special_5.jpg"
import character_1 from "../assets/Images/character_1.png"
import character_2 from "../assets/Images/character_2.png"
import character_3 from "../assets/Images/character_3.png"
import character_4 from "../assets/Images/character_4.png"
import character_5 from "../assets/Images/character_5.png"
import character_6 from "../assets/Images/character_6.png"
import character_7 from "../assets/Images/character_7.png"
import character_8 from "../assets/Images/character_8.png"
import character_9 from "../assets/Images/character_9.png"
import character_10 from "../assets/Images/character_10.png"
import character_12 from "../assets/Images/character_12.png"
import character_13 from "../assets/Images/character_13.png"
import character_14 from "../assets/Images/character_14.png"
import character_15 from "../assets/Images/character_15.png"
import character_16 from "../assets/Images/character_16.png"
import character_17 from "../assets/Images/character_17.png"
import character_18 from "../assets/Images/character_18.png"
import character_19 from "../assets/Images/character_19.png"



function Card (){
    const Image = [
        {image: disney2},
        {image: pixar},
        {image: Marvel}, 
        {image: star_wars}
    ]
    const Image2 = [
        {special: special_1},
        {special: special_2},
        {special: special_3}, 
        {special: special_4},
        {special: special_5}
    ]
    const Image3 = [
        {character: character_1},
        {character: character_2},
        {character: character_3}, 
        {character: character_4},
        {character: character_5},
        {character: character_6},
        {character: character_7},
        {character: character_8},
        {character: character_9}, 
        {character: character_10},
        {character: character_12},
        {character: character_13},
        {character: character_14},
        {character: character_15},
        {character: character_16}, 
        {character: character_17},
        {character: character_18},
        {character: character_19}
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