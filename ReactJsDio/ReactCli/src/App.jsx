import { useState } from 'react'
import './styles.css';

import Header from './components/Header'
import Section from './components/Section'
import ListItem from './components/ListItem'

const gamesListData=[
  {


    
    url:"https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt:"Imagem do jogo League of Legends",
  },
    {
     url:"https://www.twitch.tv/directory/game/VALORANT",
     imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
     alt:"Imagem do jogo Valorant",
    },
    {
      url:"https://www.twitch.tv/directory/game/Minecraft",
      imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg", 
      alt:"Imagem do jogo Minecraft",
    },
    {
      url:"https://www.twitch.tv/directory/game/Teamfight%20Tactics",
      imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
      Alt:"Imagem do jogo TFT",
    }
]

const canaisListData=[
  {
    url:"https://www.twitch.tv/maykbrito",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt:"Imagem de Mayk Brito",
  },
  {
    url:"https://www.twitch.tv/alanzoka",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt:"Imagem de Alanzoka",
  },
  {
    url:"https://www.twitch.tv/sweeet_anita",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/1936c909-66be-4a71-ba23-e1dcd547f1dc-profile_image-150x150.png",
    alt:"Imagem de Anitta",

  }
]


const socialListData=[
  {
    url:"https://www.twitch.tv/maykbrito",
    imageUrl:"/icones/twitch.svg",
    alt:"Teste",
    
  },
  {
    url:"https://www.twitter.com/maykbrito",
    imageUrl:"/icones/twitter.svg",
    alt:"Teste",
    
  },
  {
    url:"https://www.instagram.com/maykbrito",
    imageUrl:"/icones/instagram.svg",
    alt:"Teste",
  },
  {
    url:"https://www.youtube.com/maykbrito",
    imageUrl:"/icones/youtube.svg",
    alt:"Teste",
  }
]



function App() {
  return (
    <div className="App">
    <Header/>      
    <main>
     <Section 
      className="games-list"
       title="Meus Jogos"
       subtitle="Os Games que mais Curto Jogar"       
       >
        {
        gamesListData.map(function(item){
          return(
            <ListItem
            url={item.url}
            imageUrl={item.imageUrl}
            alt={item.alt}
            />
          )
        })
        }
      
       </Section>

     <Section 
     className="channel-list"
      title="Canais e Streamers"
      subtitle=" Lista de Canais e Transmissões que eu não perco!"      
      >

{
canaisListData.map(function(item){
  return(
      <ListItem
      url={item.url}
      imageUrl={item.imageUrl}
      alt={item.alt}
      />
  )
})
}
 </Section>

    
    
  
 <Section
      title="Minhas Redes"
      subtitle="Se conecte comigo agora mesmo!"
      className="social-list"      
      >
     {
      socialListData.map(function(item){
        return (
          <ListItem
          url={item.url}
          imageUrl={item.imageUrl}
          alt={item.alt}
          />
        )
      })
    }

</Section>
</main>

    

    </div>
  )
}

export default App
