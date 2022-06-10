import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../config/firebase';

const BASE_URL = "https://fakestoreapi.com/products"

export async function getAllProducts() {
  const response = await fetch(`${BASE_URL}`)
  const data = await response.json()
  return data
}

export async function getOneProducts(id) {
  const response = await fetch(`${BASE_URL}/${id}`)
  const data = await response.json()
  return data
}
export async function getDocById(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return { id: docSnap.id, ...data };
  }
  return false;
}
