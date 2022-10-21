import { React } from 'react';
import '../../Styles/AnimatedSliderButton.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

export default function AnimatedSliderButton({ text, width, link }) {
  const openInNewTab = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };
  return (
    <button className="AnimatedSliderButton" onClick={() => openInNewTab(link)}>
      <PlayArrowIcon style={{ color: 'white' }} />
      <span>{text}</span>
    </button>
  );
}
