import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import settings from './settings'

const firebaseApp = firebase.initializeApp(settings)

export const authProvider = new firebase.auth

export const db = firebaseApp.firestore()
export const storage = firebaseApp.storage()
export const auth = firebaseApp.auth()
export const providerGoogle = new firebase.auth.GoogleAuthProvider()
  
export const useDeviceLanguage = new firebase.auth().useDeviceLanguage()

export const timestamp = firebase.firestore.Timestamp

export default firebaseApp
