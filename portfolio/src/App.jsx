import logo from './logo.svg';
import './App.css';
import React, { useEffect, useLayoutEffect } from 'react';
import 'animate.css';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import AboutMePage from './components/AboutMePage';
import video from './assets/videos/cosmos.mp4';
import video_2 from './assets/videos/cosmos_2.mp4';
import video_3 from './assets/videos/cosmos_3.mp4';
import audio from './assets/audio/greetings.mp3';
import ProjectPage from './components/ProjectPage';
function App() {
  useEffect(() => {
    window.onload = function () {
      let context = new AudioContext();
    };
  }, []);
  return (
    <body className="min-h-screen">
      <video
        src={video}
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      ></video>
      {/* <audio id="audio" loop autoplay="true">
        <source src={audio} type="audio/mpeg" />
      </audio> */}
      <audio id="audio" autoplay="true">
        <source src={audio} type="audio/mpeg" />
      </audio>
      <LandingPage></LandingPage>
      <div>
        <video
          src={video_2}
          autoPlay
          loop
          muted
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            objectFit: 'cover',
          }}
        ></video>
        <AboutMePage></AboutMePage>
      </div>
      <div className="bg-yellow-500 h-auto">
        <video
          src={video_3}
          autoPlay
          loop
          muted
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            objectFit: 'cover',
          }}
        ></video>
        <ProjectPage></ProjectPage>
      </div>
      <div>
        <video
          src={video_2}
          autoPlay
          loop
          muted
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            objectFit: 'cover',
          }}
        ></video>
        <ContactPage></ContactPage>
      </div>
    </body>
  );
}

export default App;
