import React, { useEffect, useState } from 'react';
import { PageHeader } from '../Components/Headers/PageHeader';
import { db } from '../firebase-config';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { Writer } from '../Constants/types';
import { RoundedButton } from '../Components/Buttons/RoundedButton';
import { sortAndFilterPaneClassname } from '../Styles/SortAndFilterPaneStyles';
import { DropdownButton } from '../Components/Buttons/DropdownButton';
import {
  editSelectionPaneClassname,
  memberCardClassname,
  memberCardListClassname,
  selectionPaneClassname,
} from '../Styles/TestStyles';
import TextField from '../Components/TextField';
import { ROSTER_LIST } from '../Constants/media';
import { ROSTER_MEMBERS } from '../Constants/writerMetadata';
import { AlertModalButton } from '../Components/AlertModal';
import { FormButton } from '../Components/Buttons/FormButton';
import { FormTextField } from '../Components/FormTextField';
import {
  contactFormClassname,
  textFieldClassname,
} from '../Styles/ContactStyles';

type WriterCollection<T> = Partial<T> & { id: string };

type EditType = {
  title: string;
  headers: string[];
};

const EditTypes = {
  TEAM_MEMBER: {
    title: 'Team Members',
    headers: [
      'Select A Team Member',
      'Search team members',
      'Edit Contents',
      'Profile Pic Preview',
    ],
  },
  RECORDS: {
    title: 'Records',
    headers: [
      'Select A Team Member',
      'Search team members',
      'Edit Contents',
      'Profile Pic Preview',
    ],
  },
  NEW_RELEASES: {
    title: 'New Releases',
    headers: [
      'Select A Team Member',
      'Search team members',
      'Edit Contents',
      'Profile Pic Preview',
    ],
  },
  COPY: {
    title: 'Copy',
    headers: [
      'Select A Team Member',
      'Search team members',
      'Edit Contents',
      'Profile Pic Preview',
    ],
  },
};

export const Test = () => {
  const [writers, setWriters] = useState<WriterCollection<Writer>[]>([]);
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [bImageURL, setBImageURL] = useState('');
  const [bio, setBio] = useState('');
  const [roles, setRoles] = useState([]);
  const [newName, setNewName] = useState('');
  const [headerTitles, setHeaderTitles] = useState<string[]>([]);
  const writersCollectionRef = collection(db, 'writers');
  const recordsCollectionRef = collection(db, 'records');
  const [editType, setEditType] = useState<EditType>(EditTypes.TEAM_MEMBER);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const getWriters = async () => {
      const data = await getDocs(writersCollectionRef);
      const arr = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setWriters(arr);
    };
    const getRecords = async () => {
      const recordsDocs = await getDocs(recordsCollectionRef);
      const recordCollection = recordsDocs.docs.map((record) => ({
        ...record.data(),
        id: record.id,
      }));
      const writersForThisRecord = recordCollection[0].writers;
      const firstWriterId = writersForThisRecord[0].id;
      const writers = await getDocs(writersCollectionRef);
      const foundWriter = writers.docs.find((doc) => doc.id === firstWriterId);
      console.log(foundWriter?.data());
    };
    getWriters();
    getRecords();
    handleHeaderTitles();
  }, []);

  const createNewWriter = async () => {
    const newWriter: Omit<Writer, 'socials'> = {
      name: name,
      imageURL: imageURL,
      bigImageURL: bImageURL,
      biography: bio,
      roles: roles,
    };
    await addDoc(writersCollectionRef, newWriter);
  };

  const updateWriter = async (id: string, newName: string) => {
    const writer = doc(db, 'writers', id);
    const newFields = { name: newName };
    await updateDoc(writer, newFields);
  };

  const deleteWriter = async (id: string) => {
    const writerDoc = doc(db, 'writers', id);
    await deleteDoc(writerDoc);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name: name,
      imageURL: imageURL,
      bigImageURL: bImageURL,
      biography: bio,
      roles: roles,
    });
    createNewWriter();
    setName('');
    setBio('');
    setBImageURL('');
    setImageURL('');
  };

  const handleHeaderTitles = () => {
    switch (editType) {
      case EditTypes.TEAM_MEMBER:
        setHeaderTitles([
          'Select A Team Member',
          'Search team members',
          'Edit Contents',
          'Profile Pic Preview',
        ]);
      default:
        break;
    }
  };

  const SelectionPane = () => {
    return (
      <div className={selectionPaneClassname}>
        <h2>{headerTitles[0]}</h2>
        <ul>
          {Object.values(EditTypes).map((type) => (
            <RoundedButton
              text={type.title}
              selected={true}
              handleClick={() => {}}
            />
          ))}
        </ul>
        <TextField
          value={searchTerm}
          placeholder={headerTitles[1]}
          onChange={setSearchTerm}
          size={'short'}
        />
        <ul className={memberCardListClassname}>
          {writers.map((member: WriterCollection<Writer>) => (
            <div className={memberCardClassname}>
              <section className="picAndText">
                <img src={member.imageURL} />
                <div>
                  <p>{member.name}</p>
                  {/* <p style={{ fontWeight: 'normal' }}>
                    {member.roles.join(' | ')}
                  </p> */}
                </div>
              </section>
              <AlertModalButton variant="contained" onClick={() => {}}>
                Edit
              </AlertModalButton>
              <AlertModalButton
                variant="contained"
                onClick={() => deleteWriter(member.id)}
              >
                Delete
              </AlertModalButton>
            </div>
          ))}
        </ul>
      </div>
    );
  };

  const EditSelectionPane = () => {
    return (
      <div className={editSelectionPaneClassname}>
        <h2>{headerTitles[2]}</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={contactFormClassname}>
            <FormTextField
              id="name"
              label="Name"
              placeholder="Michael Jackson"
              className={textFieldClassname}
              style={{ width: '100%' }}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <FormTextField
              id="profileURL"
              label="Profile Picture URL"
              placeholder="https://imageURL.com/picture"
              className={textFieldClassname}
              style={{ width: '100%' }}
              onChange={(e) => setImageURL(e.target.value)}
              value={imageURL}
            />
            <FormTextField
              id="profileURL2"
              label="Secondary Profile Picture (optional)"
              placeholder="https://imageURL.com/picture"
              className={textFieldClassname}
              style={{ width: '100%' }}
              onChange={(e) => setBImageURL(e.target.value)}
              value={bImageURL}
            />
            <FormTextField
              id="biography"
              label="Biography"
              placeholder="Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. Known as the 'King of Pop', he is regarded as one of the most significant cultural figures of the 20th century. During his four-decade career, his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture."
              className={textFieldClassname}
              multiline
              minRows={6}
              style={{ width: '100%' }}
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            />
          </div>
          <div onClick={(e: any) => handleSubmit(e)}>
            <FormButton text={'Submit New Member'} color={'primary'} />
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      <PageHeader text={'UPDATE THE WEBSITE'} letterSpacing />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SelectionPane />
        <EditSelectionPane />
        {/* <ProfilePicPreviewPane /> */}
      </div>
      {/* <ul>
        {writers.map((writer: WriterCollection<Writer>) => (
          <>
            <li>{writer.name}</li>
            <input
              type="text"
              placeholder="New name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={() => updateWriter(writer.id, newName)}>
              Update name
            </button>
            <button onClick={() => updateWriter(writer.id, newName)}>
              Update biography
            </button>
          </>
        ))}
      </ul> */}
    </div>
  );
};
