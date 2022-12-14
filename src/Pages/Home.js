import { React, useRef } from 'react';
import Navbar from '../Components/Navbar';
import VideoBanner from '../Components/VideoBanner';
import HomeContent from '../Components/HomeContent';

export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div className="Home">
      <Navbar />
      <VideoBanner scrollFunction={executeScroll} />
      <HomeContent scrollTarget={myRef} />
    </div>
  );
}
