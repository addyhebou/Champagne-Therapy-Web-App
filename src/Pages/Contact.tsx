import React, { useState } from 'react';
import {
  contactFormClassname,
  contactHeaderClassname,
  contactPageClassname,
  textFieldClassname,
} from '../Styles/ContactStyles';
import { FormTextField } from '../Components/FormTextField';
import { FormButton } from '../Components/Buttons/FormButton';
import { AlertModal } from '../Components/AlertModal';
import { EMAIL_CLIP_ART_URL, NEWS_ALERTS } from '../Constants/media';
import { ModalTypes } from '../Constants/types';
import { PageHeader } from '../Components/Headers/PageHeader';

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleOpen();
  };

  return (
    <div className={contactPageClassname}>
      <AlertModal
        open={open}
        handleClose={handleClose}
        title={'Thanks For Your Email'}
        description={"We'll get in touch with you as soon as possible"}
        buttonText={'Close'}
        artworkURL={EMAIL_CLIP_ART_URL}
        type={ModalTypes.EMAIL}
      />
      <div className={contactHeaderClassname}>
        <PageHeader text={'Love to hear from you,'} />
        <PageHeader text={'Get in touch 🥂'} />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={contactFormClassname}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <FormTextField
              id="outlined-basic"
              label="Your Name"
              placeholder="Anakin Skywalker"
              className={textFieldClassname}
              style={{ width: '100%' }}
              autoFocus
            />
            <FormTextField
              id="outlined-basic"
              label="Your Email"
              placeholder="anakin@empire.gov"
              style={{ width: '100%' }}
              className={textFieldClassname}
            />
          </div>
          <FormTextField
            id="outlined-basic"
            label="What Are You Interested In"
            placeholder="Artist Partnerships"
            style={{ width: '100%' }}
            className={textFieldClassname}
          />
          <FormTextField
            id="outlined-basic"
            label="Message"
            placeholder="Tell us what you'd like us to know about"
            className={textFieldClassname}
            multiline
            minRows={6}
            style={{ width: '100%' }}
          />
        </div>
        <FormButton text={'Send message'} color={'primary'} />
      </form>
    </div>
  );
};
