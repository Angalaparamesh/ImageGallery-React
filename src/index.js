import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import dog1 from "./assets/images/d1.jpg"
import dog2 from "./assets/images/d2.jpg"
import dog3 from "./assets/images/d3.jpg"
import dog4 from "./assets/images/d4.jpg"
import dog5 from "./assets/images/d5.jpg"
import dog6 from "./assets/images/d6.jpg"
import dog7 from "./assets/images/d7.jpg"
import dog8 from "./assets/images/d8.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Frame(props)
{
  return(
    <div class="container">
      <div class="pic">
        <img src={props.image} alt="Dog"></img>
        <p className="para">{props.name}</p>
      </div>
    </div>
  )
}

var images = [
  {
    image : dog1,
    name:"Julie's Rabbit Ears"
  },
  {
    image : dog2,
    name:"innocent Look"
  },
  {
    image : dog3,
    name:"The Saint Doggo"
  },
  {
    image : dog4,
    name:"The Saint Doggo"
  },
  {
    image : dog5,
    name:"Julie's Rabbit Ears"
  },
  {
    image : dog6,
    name:"Big Eyed Buggy"
  },
  {
    image : dog7,
    name:"Big Eyed Buggy"
  },
  {
    image : dog8,
    name:"Innocent Look"
  }
]

root.render(
  <div id="contain" className="frame">
    {
      images.map(function(item){
        return <Frame image={item.image} name={item.name}></Frame>
      })
    }
  </div>
)