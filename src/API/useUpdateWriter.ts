import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

const updateWriter = async (id: string, newWriter: object) => {
  const writer = doc(db, 'writers', id);
  await updateDoc(writer, newWriter);
};

export const useUpdateWriter = async (
  id: string,
  name: string,
  profilePictureURL: string,
  biography: string,
  secondaryProfilePictureURL: string
) => {
  try {
    const newWriter = {
      name: name,
      imageURL: profilePictureURL,
      bigImageURL: secondaryProfilePictureURL,
      biography: biography,
      roles: [],
    };
    return await updateWriter(id, newWriter);
  } catch (error) {
    console.error('Error creating writer:', error);
    return [];
  }
};
