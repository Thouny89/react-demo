import React, { useState, useEffect } from 'react';

function Apod() {
  const [imageText, setImageText] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=5xBHNK1AFkP7rPGe46GlDRe0ufIPNZy57XuVdunE')
    .then (response => response.json())
    .then(data => {
      setImageText(data.explanation);
      setUrl(data.url);
    })
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="Apod">
 
        
          <div className="header"> 
            <h1>NASA:</h1>
            <h2> Astronomy Picture of the Day (APOD)</h2>
          </div>
          <div className="container-card">
            <img className="POD-img" alt="APOD" src={url} />  
            
              <p className="img-text">{imageText}
              </p>
              <a className="source" href="https://api.nasa.gov/">Source</a>
          
          </div>
          
 
       
    </div>
 
  );
}

export default Apod;