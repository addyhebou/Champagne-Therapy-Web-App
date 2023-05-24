import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { animatedSliderButtonClassname } from '../../Styles/AnimatedSliderButtonStyles';

interface Props {
  text: string;
  link: string;
}

export default function AnimatedSliderButton({ text, link }: Props) {
  const openInNewTab = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };
  return (
    <button
      className={animatedSliderButtonClassname}
      onClick={() => openInNewTab(link)}
    >
      <PlayArrowIcon style={{ color: 'white' }} />
      <span>{text}</span>
    </button>
  );
}
