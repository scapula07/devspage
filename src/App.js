import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import MainLayout from './layouts/mainLayout';
import Latests from './pages/Home/Posts/latests';
import FriendsPosts from './pages/Home/Posts/friends';
import Popular from './pages/Home/Posts/popular';
import UserProfile from './pages/UserProfile';
import GuestProfile from './pages/GuestProfile';
import Messenger from './pages/Messenger';
import OtherLayout from './layouts/otherLayout';
import ChatBox from './pages/Messenger/ChatBox';
import LiveStudio from './pages/Streams/LiveStudio';
import Stream from './pages/Streams';
import Stories from './pages/Stories';
import PopularStories from './pages/Stories/popular';
import ForYou from './pages/Stories/forYou';
import FollowingStories from './pages/Stories/following';
import Notfications from './pages/Notifications';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreateProfile from './pages/UserProfile/createProfile';
import SecondLayout from './layouts/secondLayout';
import Projects from './pages/Projects';
import Developers from './pages/Developers';
import Store from './pages/Store';

import {LivepeerConfig} from '@livepeer/react';
import { livepeerClient } from './utils/livepeer.config';
import MakeStories from './pages/Stories/makeStories';

function App() {
  return (
     <div className="App overflow-hidden">
         <LivepeerConfig client={livepeerClient}>
          <Routes>
              <Route  exact path="/" element={<LandingPage />} />
              <Route  exact path="/signup" element={<SignUp />} />
              <Route  exact path="/signin" element={<SignIn/>} />
              
              <Route exact path="/home" element={<MainLayout><Home /></MainLayout>} >
                   <Route  exact path="" element={<Popular/>} />
                   <Route  exact path="latest-posts" element={<FriendsPosts />} />
                   <Route  exact path="friends-posts" element={<Latests />} />
              </Route>
             
              <Route  exact path="/profile" element={<SecondLayout><UserProfile /></SecondLayout>} />
              <Route  exact path="/create-profile" element={<SecondLayout><CreateProfile  /></SecondLayout>} />
              <Route  exact path="/user" element={ <SecondLayout><GuestProfile /></SecondLayout>} />
              <Route  exact path="/messenger" element={<OtherLayout ><Messenger /></OtherLayout >} />
              <Route  exact path="/chat" element={<ChatBox />} />
              <Route  exact path="/live" element={< LiveStudio />} />
              <Route  exact path="/stream" element={<  Stream />} />
              <Route  exact path="/stories" element={<Stories />} >
                  <Route  exact path="" element={<ForYou/>} />
               </Route>

               <Route  exact path="/notifications" element={<OtherLayout ><Notfications /></OtherLayout >} />
               <Route  exact path="/makestories" element={< MakeStories />} />
          </Routes>
          </LivepeerConfig>   
     </div>
  );
}

export default App;
