import { useRef, useState } from 'react';
import VideoBanner from '../Components/VideoBanner';
import HomeContent from '../Components/HomeContent';
import Navbar from '../Components/Navbar';
import '../Styles/Home.scss';
import { Button, ButtonProps, Radio } from '@mui/material';
import { NewsAlert } from '../Components/NewsAlert';
import { useEffect } from 'react';
import { NewsAlertButtonStyles } from '../Styles/NewsAlertStyles';
import styled from '@emotion/styled';
import { NEWS_ALERTS } from '../Constants/media';

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleOpen();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="Home">
      <NewsAlert
        releaseInformation={NEWS_ALERTS}
        open={open}
        handleClose={handleClose}
      />
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
