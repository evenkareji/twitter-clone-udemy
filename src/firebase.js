import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyB8slGMVcQS1ujqkWrPmuev6fBxX4-twKY',
  authDomain: 'twitter-clone-udemy-6c2e3.firebaseapp.com',
  projectId: 'twitter-clone-udemy-6c2e3',
  storageBucket: 'twitter-clone-udemy-6c2e3.appspot.com',
  messagingSenderId: '771438115456',
  appId: '1:771438115456:web:91923fc4bf35f7a182c465',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
