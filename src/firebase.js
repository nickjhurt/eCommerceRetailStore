import Firebase from 'firebase'

let firebase = ''

export default firebase = Firebase.initializeApp({
    apiKey: "AIzaSyCVchsywpcXArTKSIID5wx4bCXruC6RVnw",
    authDomain: "gamestore-ebe8b.firebaseapp.com",
    databaseURL: "https://gamestore-ebe8b.firebaseio.com",
    projectId: "gamestore-ebe8b",
    storageBucket: "gamestore-ebe8b.appspot.com",
    messagingSenderId: "171481696054"

})

export const db = firebase.database()