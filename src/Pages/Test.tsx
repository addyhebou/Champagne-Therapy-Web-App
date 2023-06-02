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

type WriterCollection<T> = Partial<T> & { id: string };
export const Test = () => {
  const [writers, setWriters] = useState<WriterCollection<Writer>[]>([]);
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [bImageURL, setBImageURL] = useState('');
  const [bio, setBio] = useState('');
  const [newName, setNewName] = useState('');
  const writersCollectionRef = collection(db, 'writers');
  const recordsCollectionRef = collection(db, 'records');

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
  }, []);

  const createNewWriter = async () => {
    const newWriter: Omit<Writer, 'socials'> = {
      name: name,
      imageURL: imageURL,
      bigImageURL: bImageURL,
      biography: bio,
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
    createNewWriter();
    setName('');
    setBio('');
    setBImageURL('');
    setImageURL('');
  };

  return (
    <div>
      <PageHeader text={'Test Page'} letterSpacing />
      <ul>
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
            <button onClick={() => deleteWriter(writer.id)}>
              Delete writer
            </button>
          </>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <input
          type="text"
          placeholder="Big Image URL"
          value={bImageURL}
          onChange={(e) => setBImageURL(e.target.value)}
        />
        <input
          type="text"
          placeholder="biography"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
