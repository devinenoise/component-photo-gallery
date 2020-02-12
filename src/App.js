import React, { Component } from 'react';
import images from './data.js';
import Header from './Header.js'
import ImageList from './ImageList.js'


//stylesheet
import './App.css';


function App() {
  const allImages = images;

  return (
      <div>
          <Header />
      
          <ImageList images={allImages}/>
          
      </div>
  
  );
}

export default App;