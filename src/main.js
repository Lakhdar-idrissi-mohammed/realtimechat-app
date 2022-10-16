import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
import './index.css';



// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {

    apiKey: "AIzaSyBS3paF3kpWSWj5LLcgfrXZDxu0qgnAIkc",

    authDomain: "vue-chat-4fa55.firebaseapp.com",

    projectId: "vue-chat-4fa55",

    storageBucket: "vue-chat-4fa55.appspot.com",

    messagingSenderId: "188311129719",

    appId: "1:188311129719:web:4d181ef735263946f9c072",

    measurementId: "G-PGC1Q0DSH5"

  };
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

window.db= db;

db.settings({
  timestampsInSnapshots: true
});





createApp(App).use(store).use(router).mount('#app')
