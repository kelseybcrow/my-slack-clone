import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDCCky3ZNVbZQBpmpjHcrNXeq5STBc7VsM',
    authDomain: 'slack-clone-fe685.firebaseapp.com',
    projectId: 'slack-clone-fe685',
    storageBucket: 'slack-clone-fe685.appspot.com',
    messagingSenderId: '296462084011',
    appId: '1:296462084011:web:00a509a19eda260b2ed4ee',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
