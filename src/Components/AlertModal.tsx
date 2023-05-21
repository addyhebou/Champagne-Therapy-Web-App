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
import { ModalType, ModalTypes, NewRelease } from '../Constants/types';
import {
  AlertModalModalStyles,
  modalTitleClassname,
} from '../Styles/AlertModalStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { AlertModalButtonStyles } from '../Styles/AlertModalButtonStyles';
import { Colors } from '../Styles/variables';

interface Props {
  open: boolean;
  handleClose: () => void;
  type?: ModalType;
  releaseInformation?: NewRelease[];
  title?: string;
  description?: string;
  buttonText?: string;
  artworkURL?: string;
}

export const AlertModal = ({
  releaseInformation,
  open,
  handleClose,
  type = ModalTypes.STANDARD,
  title,
  description,
  buttonText,
  artworkURL,
}: Props) => {
  const [step, setStep] = useState(0);

  const AlertModalButton = styled(Button)<ButtonProps>(
    () => AlertModalButtonStyles
  );

  const handleAction = () => {
    (releaseInformation &&
      window.open(releaseInformation[step].redirectURL, '_blank')) ??
      handleClose();
  };

  const release = releaseInformation?.[step];

  const decrementStep = () => step > 0 && setStep(step - 1);
  const advanceStep = () =>
    releaseInformation &&
    step < releaseInformation.length - 1 &&
    setStep(step + 1);

  const getModalTitle = (type: ModalType) => {
    switch (type) {
      case ModalTypes.NEWS_ALERT:
        return 'New Release';
      case ModalTypes.EMAIL:
        return 'Email Sent!';
      default:
        break;
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box
            className={AlertModalModalStyles}
            style={
              type === ModalTypes.NEWS_ALERT
                ? {
                    background:
                      'linear-gradient(180deg, #D78FA5 0%, #FF578A 100%)',
                  }
                : {}
            }
          >
            <h1 className={modalTitleClassname}>{getModalTitle(type)}</h1>
            {type === ModalTypes.NEWS_ALERT && (
              <div onClick={decrementStep}>
                <ArrowBackIosIcon
                  fontSize="large"
                  sx={{
                    color: 'white',
                    visibility: !!step ? 'visible' : 'hidden',
                  }}
                />
              </div>
            )}
            <div className="contentAndFooter">
              <div className="content">
                <img
                  src={release?.artworkURL ?? artworkURL}
                  alt={'Artwork for release information'}
                />
                <div className="textContent">
                  <h1>{release?.title ?? title}</h1>
                  <p>{release?.description ?? description}</p>
                </div>
              </div>
              <div className="footer">
                <AlertModalButton
                  variant="contained"
                  onClick={handleAction}
                  style={
                    type === ModalTypes.NEWS_ALERT
                      ? {
                          background: '#C0013D',
                        }
                      : {}
                  }
                >
                  {release?.buttonText ?? buttonText}
                </AlertModalButton>
              </div>
            </div>
            {type === ModalTypes.NEWS_ALERT && releaseInformation && (
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
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
