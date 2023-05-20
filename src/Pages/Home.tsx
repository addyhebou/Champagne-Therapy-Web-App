import { useRef } from 'react';
import VideoBanner from '../Components/VideoBanner';
import HomeContent from '../Components/HomeContent';
import Navbar from '../Components/Navbar';
import '../Styles/Home.scss';

export default function Home() {
  // const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div className="Home">
      <Navbar />
      <div className="DesktopView">
        <VideoBanner />
        <HomeContent />
      </div>
      <Placeholder />
    </div>
  );
}

const Placeholder = () => {
  return (
    <div className="placeholder">
      <p>
        Champagne Therapy Web App is not yet supported on mobile browsers.
        Please visit on desktop browsers.
      </p>
    </div>
  );
};
