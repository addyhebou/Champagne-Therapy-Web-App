import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

const writersCollectionRef = collection(db, 'writers');

const getWriters = async () => {
  const data = await getDocs(writersCollectionRef);
  const arr = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return arr;
};

export const useGetWriters = async () => {
  try {
    return await getWriters();
  } catch (error) {
    console.error('Error fetching writers:', error);
    return [];
  }
};
