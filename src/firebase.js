import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAW1XJmnB01v6jxsMS7Jx_JP-X0fq_BwA8",
    authDomain: "fir-vue-80676.firebaseapp.com",
    databaseURL: "https://fir-vue-80676.firebaseio.com",
    projectId: "fir-vue-80676",
    storageBucket: "fir-vue-80676.appspot.com",
    messagingSenderId: "957315657915",
    appId: "1:957315657915:web:78b80547ad83a1218af99e"
})

export const db = app.database();
// export const namesRef = db.ref("names");