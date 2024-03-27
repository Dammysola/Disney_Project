import CardComponent from "./CardsCom"
import CardComponent2 from "./Card2"
import CardComponent3 from "./Card3"
import CardComponent4 from "./Card4"
import CardComponent5 from "./Card5"
import Card from "./Card_imageCompiled"

function CardCompiled(){

  const Cards = [
    {
      Img:'./src/assets/Images/pixar_best.jpeg',
      title: '"Pixar Best"',
      genre:  'The ultimate best album of Pixar music! CD release/ digital distribution on March 20th'
    }, 
    {
      Img : './src/assets/Images/Classic.jpeg',
      title : 'Held nationwide from May to June!',
      genre : '"Disney on classic ~ Gift of Dreams and Magic 2024" Orchestral performance of many popular works'
    },
    {
      Img : './src/assets/Images/minnie_mouse.jpeg',
      title : 'Focus on Minnie in March',
      genre :  'Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse'
    },
    {
      Img : './src/assets/Images/Donald2.png',
      title : 'disney palpalooza',
      genre :   'Tokyo Disneyland "Disney Palpalooza" 2nd "Donalds Quacky Duck" held'
    }, 
  ]

  const Cards2 = [
    {
      Img : './src/assets/Images/Car.jpeg',
      title : 'NEWS',
      genre :   'Movies that you cant miss are coming out one after another! Delivering mind-blowing entertainment on Disney Channel',
      date: 'March 25, 2024'
    },
    
    {
      Img : './src/assets/Images/little_doll.png',
      title : 'NEWS',
      genre :   '"Disney My Little Doll" A garden of happiness full of blooming white clover ',
      date: 'March 25, 2024'
    },
    {
      Img : './src/assets/Images/winnie.jpeg',
      title : 'NEWS',
      genre :   'Disney "Winnie the Pooh " Ohisama Market <Held in Ibaraki/Mito from 3/28>',
      date: 'March 25, 2024'
    },
    {
      Img : './src/assets/Images/princess.jpeg',
      title : 'NEWS',
      genre :   '"The Princess and the Frog", a movie full of wonderful music and magic, will be on Disney Channel from 8:00 p.m on Saturday, April 6th! ',
      date: 'March 25, 2024'
    },
  ]

  const Cards3 = [
    {
      Img : './src/assets/Images/disneyplus.jpeg',
      title : `This month's recommendation works`,
      genre :  'Introducing the distribution schedule of Disney Plus works. New movies and original works are appearing one aafter another!',
    },
    
    {
      Img : './src/assets/Images/Star_wars1.jpEg',
      title : 'final season',
      genre :   '"Star Wars: The Bad Batch" Season 3 is now available exclusively. The story is finally coming to an end',
    
    },
    {
      Img : './src/assets/Images/Iwaju.jpeg',
      title : 'original series',
      genre :   'All 6 episodes of "Iwaju" are now available exclusively! A science fiction animation set in Lagos, Nigeria in the near future.',
    },
    {
      Img : './src/assets/Images/Disneymovies.jpeg',
      title : 'disney plus',
      genre :   'Disney official video distribution service. In addition to masterpieces and popular works, you can also watch foreign dramas and Japenese content as much as you like.',
    },
  ]

  const Cards4 = [
    {
      Img : './src/assets/Images/teddy1.jpeg',
      title : `Chip & Dale birthday commemorative goods`,
    },
    
    {
      Img : './src/assets/Images/chair.jpeg',
      title : 'Causal Mickey items',
      genre :   'URBAN RESEARCH and others',
    
    },
    {
      Img : './src/assets/Images/doggy.jpeg',
      title : 'Recommended gift items for the welcome season',
      genre :   '',
    },
    {
      Img : './src/assets/Images/teddy.jpeg',
      title : 'Disney Plastic Gamaguchi and others ',
      genre :   'Chara Marche',
    },
  ]
  
  const Cards5 = [
    {
      Img : './src/assets/Images/chip&dale2.jpeg',
      title : `chip and dale`,
      genre :  'Cute chipmunk character. Chip has a black nose and one tooth in the middle, and Da...',
    },
    
    {
      Img : './src/assets/Images/rapunzel.jpeg',
      title : 'rapunzel',
      genre :   'Rapunzel, a vivacious girl with long blonde hair who lives in a high tower, is yearning...',
    
    },
    {
      Img : './src/assets/Images/ducky&bunny.jpeg',
      title : 'ducky and bunny',
      genre :   'A stuffed animal that was a prize for shooting at the mobile amuzement park...',
    },
    {
      Img : './src/assets/Images/rabbit.jpeg',
      title : 'rabbit',
      genre :   'A rabbit wo lives in the 100 Acre wood with Pooh and his friends. Athough he ha..',
    },
    {
      Img : './src/assets/Images/tonsuke.jpeg',
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