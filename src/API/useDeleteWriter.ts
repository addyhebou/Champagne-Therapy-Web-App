import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

const deleteWriter = async (id: string) => {
  const writerDoc = doc(db, 'writers', id);
  await deleteDoc(writerDoc);
};

export const useDeleteWriter = async (id: string) => {
  try {
    return await deleteWriter(id);
  } catch (error) {
    console.error('Error deleting writer:', error);
    return [];
  }
};
