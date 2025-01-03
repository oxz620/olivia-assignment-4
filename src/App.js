import './App.css';
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import Saved from "./pages/Saved";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Profiles" element={<Profiles />} />
          <Route path="Saved Profiles" element={<Saved />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/Saved">Saved Profiles</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

const Home=()=> {
  return (
    <div>
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
  <header className="header">
        <img src="https://i.postimg.cc/SxLbLPpf/Screenshot-2024-12-19-at-3-04-09-PM.png" className="logo" alt="Logo" />
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
  const [liked, setLiked] = useState(false);

  const toggleLike =() => {
    setLiked(!liked);
  }
  useEffect(() => {
    console.log("runs every render")
  })
  return(
    <>
        <img src={
          liked
          ? 'https://cdn-icons-png.freepik.com/512/7795/7795378.png'
          : 'https://www.svgrepo.com/show/391884/heart-empty.svg'
        } 
        alt='heart' class="smallimg"/>
        <button onClick={toggleLike}>
          {liked ? 'Unsave Profile' : 'Save Profile'}
        </button>
    </>
  )
}