import {
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  onSnapshot, 
  orderBy, 
  query, 
  doc, 
  deleteDoc, 
  getDoc, 
  updateDoc
} from 'firebase/firestore';

import { app } from './firebase';

export const db = getFirestore(app);

export {
  collection, 
  addDoc, 
  getDocs, 
  onSnapshot, 
  orderBy, 
  query, 
  doc, 
  deleteDoc, 
  getDoc, 
  updateDoc,
};

