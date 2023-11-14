import { doc } from 'firebase/firestore';
import {
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  getDoc,
  updateDoc,
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
export const getDocument = async (id) => {
  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data(); // Devolver los datos del documento
  }
  throw new Error('El documento no existe');
};
export const editPost = (documentId, comment) => {
  const doclike = doc(db, 'posts', documentId);
  updateDoc(doclike, {
    comment,
  });
};
export const likePost = async (documentId, userId) => {
  const doclike = doc(db, 'posts', documentId);
  try {
    const snapshot = await getDoc(doclike);
    if (snapshot.exists()) {
      const docData = snapshot.data();
      const likes = docData.likes || [];
      if (!likes.includes(userId)) {
        await updateDoc(doclike, {
          likes: [...likes, userId],
        });
        console.log('Se dio Like =)');
        const event = new Event('likeAdded');
        document.dispatchEvent(event);
      } else {
        console.log('Ya habías dado like =).');
        const dislike = likes.filter((like) => like !== userId);
        console.log(dislike);
        await updateDoc(doclike, {
          likes: dislike,
        });
      }
    }
  } catch (error) {
    console.error('Error al dar like :(', error);
  }
};
