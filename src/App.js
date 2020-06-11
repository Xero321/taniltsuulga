import React, { useState } from "react";
import { storage } from "./firebase";

import './App.css';



/* function App() {
  return (
    <div>
    <div className="App">
    <h1 className="title">100 зураг 15000</h1>
  <button className="button" type="button">ЗУРАГ ИЛГЭЭХ ТОВЧ</button>
     <Nemeh/>
    </div>
    </div>
  );
}

export default App; */


const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", image);

  return (
    <div>
        
        <div className="Aa">
          
          
          
        
        </div>

        <div className="Bb">
        </div>
        <div className="Cc">
          
          <progress value={progress} max="100" />
          <br />
          <br />
          <input type="file" onChange={handleChange} />
          <button onClick={handleUpload}>Upload</button>
          
          
        
        </div>
          
        
        
        
      
      </div>
   
  );

};

export default ReactFirebaseFileUpload ;

