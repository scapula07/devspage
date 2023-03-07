import React,{useState,useEffect} from 'react';
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
import Browse from './pages/Browse';
import {LivepeerConfig} from '@livepeer/react';
import ProjectDetails from './pages/Projects/projectDetails';
import { livepeerClient } from './utils/livepeer.config';
import MakeStories from './pages/Stories/makeStories';
import UserPosts from './pages/UserProfile/posts';
import Media from './pages/UserProfile/media';
import { UserState ,CCProfileState,AccessTokenState,} from './recoil/globalState'
import { useRecoilState } from 'recoil'

import Web3 from "web3";
import { useAuth } from './utils/auth'
import { onAuthStateChanged } from "firebase/auth"
import { auth,db } from './firebase';
import { doc,getDoc}  from "firebase/firestore";
import { useLazyQuery } from "@apollo/client";
import { GET_PROFILE,PRIMARY_PROFILE } from './graphql/auth'
import PostContent from './pages/Content/postContent';

const ccProfileNftContract="0x57e12b7a5f38a7f9c23ebd0400e6e53f2a45f271"
const profile_nft_operator="0x85AAc6211aC91E92594C01F8c9557026797493AE"

function App() {

  const web3 = new Web3(window.ethereum)
  const [currentUser,setcurrentUser]=useRecoilState(UserState)
  const [ccProfile,setProfile]=useRecoilState(CCProfileState)
  const {connectWallet} =useAuth()
   
  const [PrimaryProfile] =useLazyQuery(PRIMARY_PROFILE);
         
        let authListner=null
        useEffect( ()=>{
        
          authListner=onAuthStateChanged(auth,(user)=>{
              if (user !== null) {
                  const uid = user.uid;
                  console.log(uid,"id")
             
                  const userRef =doc(db,"users", uid)
                  console.log(userRef)
                getDoc(userRef).then(res=> {
                  console.log(res.exists(),"exist")
                
                  setcurrentUser(res.data())
                })
              }
              })
        return(
            authListner()
        )
      },[])
          
      console.log(currentUser,"current")

      useEffect(()=>{
        const getProfile=async()=>{
           try{

            const provider = await connectWallet();
             const signer = provider.getSigner();
             const address = await signer.getAddress();
          
        

          

        const ccProfile = await PrimaryProfile({
                variables: {
                    address:address,
                    
                  },
              
              });
         console.log(ccProfile?.data?.address?.wallet?.primaryProfile,"profile")
         setProfile(ccProfile?.data?.address?.wallet?.primaryProfile)
            
           }catch(e){
              console.log(e)
           }
        }

        getProfile()

      },[currentUser])

  return (
     <div className="App overflow-hidden">
         <LivepeerConfig client={livepeerClient}>
          <Routes>
              <Route  exact path="/" element={<LandingPage />} />
              <Route  exact path="/signup" element={<SignUp />} />
              <Route  exact path="/signin" element={<SignIn/>} />
              
              <Route exact path="/home" element={<MainLayout><Home /></MainLayout>} >
                   <Route  exact path="" element={<Popular/>} />
                   <Route  exact path="friends-posts" element={<FriendsPosts />} />
                   <Route  exact path="latest-posts" element={<Latests />} />
              </Route>
             
              <Route  exact path="/profile" element={<SecondLayout><UserProfile /></SecondLayout>} >
                  <Route  exact path="" element={<UserPosts />} />
                  <Route  exact path="media" element={< Media/>} />
               </Route>
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
               <Route  exact path="/store" element={<MainLayout> <Browse /></MainLayout>} />
               <Route  exact path="/projects" element={<MainLayout> <Projects/></MainLayout>} />
               <Route  exact path="/project/:id" element={<SecondLayout><ProjectDetails/></SecondLayout>} />
               <Route  exact path="/content/:id" element={<SecondLayout><PostContent /></SecondLayout>} />
             
             
          </Routes>
          </LivepeerConfig>   
     </div>
  );
}

export default App;
