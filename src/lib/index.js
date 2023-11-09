import {
  db, 
  collection, 
  addDoc, 
  getDocs, 
  onSnapshot, 
  query, 
  orderBy, 
  doc, 
  deleteDoc, 
  getDoc, 
  updateDoc

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
try {
  await updateDoc(docRef, {
    comment: newComment,
  });
  console.log('Publicación editada');
} catch (error) {
  console.error('Error al editar la publicación:', error);
}

// export const likePost = (id) => updateDoc (doc(db, 'posts', id));

export const likePost = async (documentId, userId) => {
  const doclike = doc(db, 'posts', documentId);

  try {
    const snapshot = await getDoc(doclike);
    if (snapshot.exists()) {
      const docData = snapshot.data();
      const likes = docData.likes || [];

      if (!likes.includes(userId)) {
        // la usuaria no ha dado like, así que se puede sumar el like
        await updateDoc(doclike, {
          likes: [...likes, userId], // esta función lo q hace es añadir el nuevo like al array de likes
        });
        console.log('Se dio Like =)');
      } else {
        console.log('ya habias dado like =).');
      }
    } 
  } catch (error) {
    console.error('Error al dar like :(', error);
  }
};







