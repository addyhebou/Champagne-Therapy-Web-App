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
import { NewRelease } from '../Constants/types';
import {
  NewsAlertButtonStyles,
  NewsAlertModalStyles,
} from '../Styles/NewsAlertStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import ColorThief from '../../node_modules/colorthief/dist/color-thief.mjs';

interface Props {
  releaseInformation: NewRelease[];
  open: boolean;
  handleClose: () => void;
}

export const NewsAlert = ({ releaseInformation, open, handleClose }: Props) => {
  const [step, setStep] = useState(0);

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
