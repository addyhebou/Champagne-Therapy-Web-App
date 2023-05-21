import {
  Box,
  Button,
  ButtonProps,
  Fade,
  Modal,
  Radio,
  styled,
} from '@mui/material';
import React from 'react';
import { NewRelease, RGB } from '../Constants/types';
import {
  NewsAlertButtonStyles,
  NewsAlertModalStyles,
} from '../Styles/NewsAlertStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { useEffect } from 'react';
import { getColor, getColorFromURL, getPaletteFromURL } from 'color-thief-node';
import { NEWS_ALERTS, ROSTER_LIST } from '../Constants/media';
import { rgbToHex } from '../Utils/utils';

interface Props {
  releaseInformation: NewRelease[];
  open: boolean;
  handleClose: () => void;
}

export const NewsAlert = ({ releaseInformation, open, handleClose }: Props) => {
  const [step, setStep] = useState<number>(0);
  const [dominantColor, setDominantColor] = useState<RGB>([]);
  const [mainColor, setMainColor] = useState<string>('');

  useEffect(() => {
    async function fetchColor() {
      const imageUrl = ROSTER_LIST[0].imageURL;

      const googleProxyURL =
        'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
      const image = new Image();
      const proxyURL = googleProxyURL + encodeURIComponent(imageUrl);
      // console.log({ proxyURL });
      image.src = proxyURL;
      const mainColor = rgbToHex(getColor(image));
      console.log({ mainColor });
      // setMainColor(mainColor);
    }
    fetchColor();
  }, []);

  const NewsAlertButton = styled(Button)<ButtonProps>(
    () => NewsAlertButtonStyles
  );

  const handleAction = () => {
    window.open(releaseInformation[step].redirectURL, '_blank');
  };

  const release = releaseInformation[step];

  const decrementStep = () => step > 0 && setStep(step - 1);
  const advanceStep = () =>
    step < releaseInformation.length - 1 && setStep(step + 1);

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Box sx={NewsAlertModalStyles}>
          <div onClick={decrementStep}>
            <ArrowBackIosIcon
              fontSize="large"
              sx={{ color: 'white', visibility: !!step ? 'visible' : 'hidden' }}
            />
          </div>
          <div className="contentAndFooter">
            <div className="content">
              <img
                src={release.artworkURL}
                alt={'Artwork for release information'}
              />
              <div className="textContent">
                <h1>{release.title}</h1>
                <p>{release.description}</p>
              </div>
            </div>
            <div className="footer">
              <NewsAlertButton variant="contained" onClick={handleAction}>
                {release.buttonText}
              </NewsAlertButton>
              {/* <div>
                {releaseInformation.map((release) => (
                  <Radio
                    checked={true}
                    value={release.title}
                    name="radio-buttons"
                  />
                ))}
              </div> */}
            </div>
          </div>
          <div onClick={advanceStep}>
            <ArrowForwardIosIcon
              fontSize="large"
              sx={{
                color: 'white',
                visibility:
                  !!releaseInformation.length &&
                  step < releaseInformation.length - 1
                    ? 'visible'
                    : 'hidden',
              }}
            />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
