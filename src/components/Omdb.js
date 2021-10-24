
import React, {  useState } from 'react';



function Omdb() {
  const [search, setSearch] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieImg, setMovieImg] = useState('');
  const [plot, setPlot] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  

const fetchData = () => {

    document.querySelector(".container-card").classList.add("active");

        fetch('https://www.omdbapi.com/?t=' + search + '&apikey=47a89f9b')
        .then (response => response.json())
        .then(data => {
          setMovieTitle(data.Title);
          setMovieImg(data.Poster);
          setPlot(data.Plot);
          setYear(data.Year);
          setRating(data.Ratings[0]);
        
        })
        .catch(err => console.log(err))
      }

const inputChanged=(e) => {
  setSearch(e.target.value);
}


        
  return(
    <div className="Omdb">
        <div className="header"> 
            <h1>THE OPEN MOVIE DATABASE (<a href="https://omdbapi.com/" target="_blank" rel="noreferrer" >https://omdbapi.com/</a>)</h1>

          </div>

          <div className="search">
        
            <input className="search-field" placeholder="Enter title of a movie" value={search} onChange={inputChanged}/>
            <button class="search-button" onClick={fetchData}>Search</button>
          </div>
        <img class="poster" alt="" src={movieImg}></img>
        <div className="container-card"> 
            <p className="title">{movieTitle} {year} </p>
            <p className="rating"> {rating.Source} : {rating.Value}</p>
            <p className="plot">{plot}</p> 
          </div>
          
 
       
    </div>
  );
  }

export default Omdb;