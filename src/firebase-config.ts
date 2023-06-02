import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAOZt7lgPfm0DVxSNjQMVQM4LyF86ahdJU',
  authDomain: 'champagne-therapy.firebaseapp.com',
  projectId: 'champagne-therapy',
  storageBucket: 'champagne-therapy.appspot.com',
  messagingSenderId: '945545568410',
  appId: '1:945545568410:web:2dadb465045a1d3701ff23',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
