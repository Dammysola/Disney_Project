import carouselImgae from "../assets/Images/first_img.jpeg"

const Carousel = () => {
    return (

        
            <div id="carousel" >
                <img id="carouselImage" src={carouselImgae} alt="" />
                <div id="carouselTitle">
                    <h2 id="Carousel_header"> Three Disney & Pixar "tear-jerking Masterpieces" to be released in theaters</h2>
                    <h4 id="Carousel_text">Three masterpieces nominated for the Academy Award for Best Animated Feature are coming to the big screen</h4>
                </div>
            </div>
        
    )

}
export default Carousel