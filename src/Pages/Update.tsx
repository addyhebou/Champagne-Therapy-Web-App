import React, { FormEvent, useState } from 'react';
import { PageHeader } from '../Components/Headers/PageHeader';
import { FormTextField } from '../Components/FormTextField';
import { textFieldClassname } from '../Styles/ContactStyles';
import { FormButton } from '../Components/Buttons/FormButton';
import { updateFormClassname } from '../Styles/UpdateStyles';
import { UPDATE_FORM } from '../Constants/constants';

export default function Update() {
  const [name, setName] = useState('');
  const [profilePictureURL, setProfilePictureURL] = useState('');
  const [biography, setBiography] = useState('');
  const [secondaryProfilePictureURL, setSecondaryProfilePictureURL] =
    useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <PageHeader text={'Update the website'} letterSpacing />
      <form onSubmit={(e) => handleSubmit(e)} className={updateFormClassname}>
        <FormTextField
          value={name}
          label={'Name'}
          placeholder={UPDATE_FORM.NAME_PLACEHOLDER}
          className={textFieldClassname}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '33vw' }}
        />
        <FormTextField
          value={profilePictureURL}
          label={'Profile Picture URL'}
          placeholder={UPDATE_FORM.PROFILE_PIC_URL}
          onChange={(e) => setProfilePictureURL(e.target.value)}
          style={{ width: '33vw' }}
          className={textFieldClassname}
        />
        <FormTextField
          value={secondaryProfilePictureURL}
          label={'Secondary Profile Picture URL'}
          placeholder={UPDATE_FORM.SECONDARY_PROFILE_PIC_URL}
          onChange={(e) => setSecondaryProfilePictureURL(e.target.value)}
          style={{ width: '33vw' }}
          className={textFieldClassname}
        />
        <FormTextField
          value={biography}
          label={'Biography'}
          placeholder={UPDATE_FORM.BIO_PLACEHOLDER}
          onChange={(e) => setBiography(e.target.value)}
          style={{ width: '33vw' }}
          className={textFieldClassname}
        />
        <FormButton text={'Submit New Member'} color={'primary'} />
      </form>
    </div>
  );
}
