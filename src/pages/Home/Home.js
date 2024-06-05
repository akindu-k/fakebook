import React from 'react'
import NavBar from '../../components/Navigation/NavBar'
import LeftPane from '../../components/LeftPane/LeftPane'
import RightPane from  '../../components/RightPane/RightPane'
import PostPane from  '../../components/PostPane/PostPane'
import './Home.css'
export default function Home() {
  return (
    <>
      <div><NavBar/></div>
    
      <div className="bottomContainer">
        <LeftPane/>
        <PostPane/>
        <RightPane/>
      </div>
    </>
  );
}



//app.js eken home eka call karanwa
// home eken navbar eka call kala