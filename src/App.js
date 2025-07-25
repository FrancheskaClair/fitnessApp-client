import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Workout from './pages/Workouts';
import AboutUs from './pages/AboutUs';


import { UserProvider } from './UserContext';

function App() {

    const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });


  function unsetUser(){
    localStorage.clear();
  };
  useEffect(()=> {
      fetch('https://fitnessapi-salvador.onrender.com/users/details', {
        headers : {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log("This is data:")
        console.log(data);

        if(data.auth === "Failed"){
          setUser({
            id : null,
            isAdmin: null
          })
        } else{
          setUser({
            id: data.user._id,
            isAdmin: data.user.isAdmin
          })
        }
      });

  }, [])

  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user])

  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/workouts" element={<Workout />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </UserProvider>
  );
}

export default App;