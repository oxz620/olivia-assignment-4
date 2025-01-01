import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="profs">
        <Profile name="Sadie Wang" src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" alt="Photo of Sadie" bio="heyyy i'm a journalism major and a freshman. hoping to meet people to go out with and maybe motivate me to go on runs!" />
        <Profile name="Matty McAnderson" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="Photo of Matty" bio="Hey everyone, I'm an IE major in McCormick. I'm looking for friends to get coffee with and to see comedy shows with." />
        <Profile name="Brian Smith" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Photo of Brian" bio="What's up everyone! I'm super excited to be on here and just meet people who live close to me and are chill people!" />
        <Profile name="Brain Shith" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Photo of Brian" bio="What's up everyone! I'm super excited to be on here and just meet people who live close to me and are chill people!" />
        <Profile name="Bran Shihh" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Photo of Brian" bio="What's up everyone! I'm super excited to be on here and just meet people who live close to me and are chill people!" />
        <Profile name="Bro Shhhh" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Photo of Brian" bio="What's up everyone! I'm super excited to be on here and just meet people who live close to me and are chill people!" />
        <Profile name="Bruh Shh" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Photo of Brian" bio="What's up everyone! I'm super excited to be on here and just meet people who live close to me and are chill people!" />
        <Profile name="Bru S" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Photo of Brian" bio="What's up everyone! I'm super excited to be on here and just meet people who live close to me and are chill people!" />

      </div>
    </div>
  )
}

function NavBar(){
  return(
  <header className="App-header">
        <img src="https://i.postimg.cc/SxLbLPpf/Screenshot-2024-12-19-at-3-04-09-PM.png" className="App-logo" alt="Logo" />
          <div class="text1">
          Find New Friends
          </div>
          <div class="text1">
          <button class="button1">
          LOG OUT
          </button>
          </div>
  </header>
  )
}

function Profile(props){
  return (
    <div class="profStyle">
      {props.name}    
      <Like />
      <br></br>
      <img src={props.src} width={300} height={200} alt={props.alt} />
      <br></br>
      <text class="bioStyle"> {props.bio}</text>
    </div>
  )
}


function Like(){
  const [selected, setSelected] = useState('https://www.svgrepo.com/show/391884/heart-empty.svg')
  
  useEffect(() => {
    console.log("runs every render")
  })
  return(
    <>
        <img src={selected} alt='heart' class="smallimg"/>
        <button onClick={() => setSelected('https://cdn-icons-png.freepik.com/512/7795/7795378.png')}>  Save Profile</button>
    </>
  )
}



export default App;
