import {
  db, collection, addDoc, getDocs,
} from '../firestore.js';

export const addPost = (comment) => {
  addDoc(collection(db, 'posts'), {
    comment,
  });
};

export const querySnapshot = getDocs(collection(db, 'posts'));
