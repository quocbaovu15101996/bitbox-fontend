import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { request } from './request';
import { Storage } from 'stores/Storage';

export const fetchDataPostDetail = (postId: string) =>
  request<any>('get', '/api/posts/' + postId, {
    populate: '*'
  });

export const createComment = async (text: string, postId: string) => {
  const db = getFirestore();
  await addDoc(collection(db, `Posts/${postId}/comments`), {
    user: Storage?.user,
    text,
    createdAt: Date.now()
  })
    .then(() => {
      console.log('comment successfully');
    })
    .catch(error => {
      console.error('Error writing comment: ', error);
    });
};
