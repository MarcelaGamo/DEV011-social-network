import {
  db, collection, addDoc, getDocs, onSnapshot, query, orderBy, deleteDoc, doc, getDoc, updateDoc
} from '../firestore.js';

const postCollection = collection(db, 'posts');

export const addPost = (comment, user) => {
  addDoc(postCollection, {
    comment,
    date: Date.now(),
    user,
    likes: [],
  });
};

export const querySnapshot = getDocs(postCollection);

const q = query(postCollection, orderBy('date', 'desc'));

export const paintRealTime = (callback) => onSnapshot(q, callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const editpost = (id) => getDoc(doc(db, 'posts', id));

export const likePost = (id) => updateDoc (doc(db, 'posts', id));
  

