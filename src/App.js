import React from 'react';
import { initializeApp } from "firebase/app";

import Login from "./pages/Login"

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <Login />
  )
}

export default App