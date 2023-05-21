import { useState } from 'react';
import VideoBanner from '../Components/VideoBanner';
import HomeContent from '../Components/HomeContent';
import '../Styles/Home.scss';
import { AlertModal } from '../Components/AlertModal';
import { useEffect } from 'react';
import { NEWS_ALERTS } from '../Constants/media';
import { ModalTypes } from '../Constants/types';

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
      <AlertModal
        releaseInformation={NEWS_ALERTS}
        open={open}
        handleClose={handleClose}
        type={ModalTypes.NEWS_ALERT}
      />
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
