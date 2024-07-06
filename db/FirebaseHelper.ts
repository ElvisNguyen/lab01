import { db } from "./FirebaseConfig";
import {collection, doc, addDoc, deleteDoc, updateDoc} from 'firebase/firestore'

export const addToListDB = async (title: String) => {
    try {
        const docRef = await addDoc(collection(db, 'todo-list'), {
            title: title,
            status: false
          });
          
          await updateDoc(docRef, {id: docRef.id})
          return docRef.id.toString()
        } catch (error) {
          console.log('Error adding the document', error);
    }
}

export const deleteTaskDB = async (id:String) => {
    try {
        const itemRef = doc(db, `todo-list/${id}`)
        await deleteDoc(itemRef)
    } catch (error) {
        console.error(error)
    }

}

export const setStatus = async (id:String, status:Boolean) => {
    try {
        const itemRef = doc(db, `todo-list/${id}`)
        await updateDoc(itemRef, {status: status})
    } catch (error) {
        console.error(error)
    }

}