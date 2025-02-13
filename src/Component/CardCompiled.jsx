import CardComponent from "./CardsCom"
import CardComponent2 from "./Card2"
import CardComponent3 from "./Card3"
import CardComponent4 from "./Card4"
import CardComponent5 from "./Card5"
import Card from "./Card_imageCompiled"
import pixar_best from "../assets/Images/pixar_best.jpeg"
import classic from "../assets/Images/Classic.jpeg"
import minnie_mouse from "../assets/Images/minnie_mouse.jpeg"
import Donald2 from "../assets/Images/Donald2.png"
import Car from "../assets/Images/Car.jpeg"
import little_doll from "../assets/Images/little_doll.png"
import winnie from "../assets/Images/winnie.jpeg"
import princess from "../assets/Images/princess.jpeg"
import disneyplus from "../assets/Images/disneyplus.jpeg"
import Star_wars1 from "../assets/Images/Star_Wars1.jpeg"
import Iwaju from "../assets/Images/Iwaju.jpeg"
import Disneymovies from "../assets/Images/Disneymovies.jpeg"
import teddy1 from "../assets/Images/teddy1.jpeg"
import chair from "../assets/Images/chair.jpeg"
import doggy from "../assets/Images/doggy.jpeg"
import teddy from "../assets/Images/teddy.jpeg"
import chipdale2 from "../assets/Images/chip&dale2.jpeg"
import rapunzel from "../assets/Images/rapunzel.jpeg"
import duckybunny from "../assets/Images/ducky&bunny.jpeg"
import rabbit from "../assets/Images/rabbit.jpeg"
import tonsuke from "../assets/Images/tonsuke.jpeg"

function CardCompiled(){

  const Cards = [
    {
      Img: pixar_best,
      title: '"Pixar Best"',
      genre:  'The ultimate best album of Pixar music! CD release/ digital distribution on March 20th'
    }, 
    {
      Img : classic,
      title : 'Held nationwide from May to June!',
      genre : '"Disney on classic ~ Gift of Dreams and Magic 2024" Orchestral performance of many popular works'
    },
    {
      Img : minnie_mouse,
      title : 'Focus on Minnie in March',
      genre :  'Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse'
    },
    {
      Img : Donald2,
      title : 'disney palpalooza',
      genre :   'Tokyo Disneyland "Disney Palpalooza" 2nd "Donalds Quacky Duck" held'
    }, 
  ]

  const Cards2 = [
    {
      Img : Car,
      title : 'NEWS',
      genre :   'Movies that you cant miss are coming out one after another! Delivering mind-blowing entertainment on Disney Channel',
      date: 'March 25, 2024'
    },
    
    {
      Img : little_doll,
      title : 'NEWS',
      genre :   '"Disney My Little Doll" A garden of happiness full of blooming white clover ',
      date: 'March 25, 2024'
    },
    {
      Img : winnie,
      title : 'NEWS',
      genre :   'Disney "Winnie the Pooh " Ohisama Market <Held in Ibaraki/Mito from 3/28>',
      date: 'March 25, 2024'
    },
    {
      Img : princess,
      title : 'NEWS',
      genre :   '"The Princess and the Frog", a movie full of wonderful music and magic, will be on Disney Channel from 8:00 p.m on Saturday, April 6th! ',
      date: 'March 25, 2024'
    },
  ]

  const Cards3 = [
    {
      Img : disneyplus,
      title : `This month's recommendation works`,
      genre :  'Introducing the distribution schedule of Disney Plus works. New movies and original works are appearing one aafter another!',
    },
    
    {
      Img : Star_wars1,
      title : 'final season',
      genre :   '"Star Wars: The Bad Batch" Season 3 is now available exclusively. The story is finally coming to an end',
    
    },
    {
      Img : Iwaju,
      title : 'original series',
      genre :   'All 6 episodes of "Iwaju" are now available exclusively! A science fiction animation set in Lagos, Nigeria in the near future.',
    },
    {
      Img : Disneymovies,
      title : 'disney plus',
      genre :   'Disney official video distribution service. In addition to masterpieces and popular works, you can also watch foreign dramas and Japenese content as much as you like.',
    },
  ]

  const Cards4 = [
    {
      Img : teddy1,
      title : `Chip & Dale birthday commemorative goods`,
    },
    
    {
      Img : chair,
      title : 'Causal Mickey items',
      genre :   'URBAN RESEARCH and others',
    
    },
    {
      Img : doggy,
      title : 'Recommended gift items for the welcome season',
      genre :   '',
    },
    {
      Img : teddy,
      title : 'Disney Plastic Gamaguchi and others ',
      genre :   'Chara Marche',
    },
  ]
  
  const Cards5 = [
    {
      Img : chipdale2,
      title : `chip and dale`,
      genre :  'Cute chipmunk character. Chip has a black nose and one tooth in the middle, and Da...',
    },
    
    {
      Img : rapunzel,
      title : 'rapunzel',
      genre :   'Rapunzel, a vivacious girl with long blonde hair who lives in a high tower, is yearning...',
    
    },
    {
      Img : duckybunny,
      title : 'ducky and bunny',
      genre :   'A stuffed animal that was a prize for shooting at the mobile amuzement park...',
    },
    {
      Img : rabbit,
      title : 'rabbit',
      genre :   'A rabbit wo lives in the 100 Acre wood with Pooh and his friends. Athough he ha..',
    },
    {
      Img : tonsuke,
      title : 'Tonsuke',
      genre :   'A curious rabbit who appears in ``Bambi" (1942). bambi playmate. They have a...',
    },
  ]


    return(
      <div>
        
        <div id="main">
          {
            Cards.map((object)=>{

              return(
                <CardComponent 
                Img = {object.Img}
                title ={object.title}
                genre ={object.genre}/>
              )
              
            })
          }
          
        </div> <br /><br />

        <h3 className="header">NEWS</h3>
        <div id="main">
  
          {
            Cards2.map((object2)=>{

              return(
                <CardComponent2
                Img = {object2.Img}
                title ={object2.title}
                genre ={object2.genre}
                date = {object2.date}
                />
              )
            })
          }
        </div><br /> <br />
        <div className="part_four">
          <h2 id="header2">Disney Plus recommendation information</h2>
            <div  id="main">
              {
                Cards3.map((object3)=>{

                  return(
                    <CardComponent3
                    Img = {object3.Img}
                    title ={object3.title}
                    genre ={object3.genre}
                    />
                  )
                })
              }
          </div>
        </div>

        <div>
          <h2 className="header">Good featuring popular characters are available!</h2>
          <div id="main">
            {
              Cards4.map((object4)=>{

                return(
                  <CardComponent4
                  Img = {object4.Img}
                  title ={object4.title}
                  genre ={object4.genre}
                  />
                )
              })
            }
              
          </div>
        </div>
        <div className="Card5_main_div">
          <h2 className="header">Character introduction</h2>
          <div id="main">
            {
              Cards5.map((object5)=>{

                return(
                  <CardComponent5
                  Img = {object5.Img}
                  title ={object5.title}
                  genre ={object5.genre}
                  />
                )
              })
            }
          </div>
          <Card/>
        </div>
        
      </div>
    )
    
}
export default CardCompiled