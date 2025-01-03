import './App.css';
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Profiles" element={<Profiles />} />
          <Route path="Saved" element={<Saved />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
    <NavBar />
      
      <Outlet />
    </>
  )
};

const Saved=()=> {
  return (
    <div>
      Hi! This will one day display all the saved (liked) profiles.
    </div>
  )
}

const NoPage = () => {
  return <h1>404</h1>;
};

function NavBar(){
  return(
  <header className="header">
        <img src="https://i.postimg.cc/SxLbLPpf/Screenshot-2024-12-19-at-3-04-09-PM.png" className="logo" alt="Logo" />
        <div className="nav-text">
          <Link to="/profiles" className="nav-link">Profiles</Link>
        </div>
        <div className="nav-text">
          <Link to="/saved" className="nav-link">Saved Profiles</Link>
        </div>
          <div className="nav-text">
          <button className="button1">
          LOG OUT
          </button>
          </div>
  </header>
  )
}

const API_URL = 'https://disc-assignment-5-users-api.onrender.com/api/users';

async function getAllUsers() {
  try {
    const response = await fetch(API_URL);  // Send GET request to API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users = await response.json();  // Parse the response to JSON
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

const Profiles = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      const fetchUsers =async () => {
        const usersArray=await getAllUsers();
        console.log('Fetched Users:', usersArray); // Log the response to check data

        // Check if the response is an array
        if (Array.isArray(usersArray)) {
          setUsers(usersArray); // Store the fetched users in state
        } else {
          throw new Error('Response is not an array');
        }
      }
      fetchUsers();
      },[]);

  if (!users.length) {
    return <div>No users found.</div>;
  }

  return (
    <div className="user-container">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2>
              {user.firstname} {user.lastname}
          </h2>
          <Like />
          <br></br>
          <img
              src={user.profilepicture}
              alt={`${user.firstName} ${user.lastName}`}
              className="user-image"
            />
          <p>Bio: {user.bio}</p>
          <br></br>
          <p>Major: {user.major}</p>
          <br></br>
          <p>Graduation Year: {user.graduationyear}</p>
        </div>
      ))}
    </div>
  )
}


function Like(){
  const [liked, setLiked] = useState(false);

  const toggleLike =() => {
    setLiked(!liked);
  }

  return(
    <>
        <img src={
          liked
          ? 'https://cdn-icons-png.freepik.com/512/7795/7795378.png'
          : 'https://www.svgrepo.com/show/391884/heart-empty.svg'
        } 
        alt='heart' className="smallimg"/>
        <button onClick={toggleLike}>
          {liked ? 'Unsave Profile' : 'Save Profile'}
        </button>
    </>
  )
}