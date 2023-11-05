import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Writer } from '../Constants/types';

const writersCollectionRef = collection(db, 'writers');

const createWriter = async (newWriter: Writer) => {
  await addDoc(writersCollectionRef, newWriter);
};

export const useCreateWriter = async (
  name: string,
  profilePictureURL: string,
  biography: string,
  secondaryProfilePictureURL: string
) => {
  try {
    const newWriter: Omit<Writer, 'socials'> = {
      name: name,
      imageURL: profilePictureURL,
      bigImageURL: secondaryProfilePictureURL,
      biography: biography,
      roles: [],
    };
    return await createWriter(newWriter);
  } catch (error) {
    console.error('Error creating writer:', error);
    return [];
  }
};
