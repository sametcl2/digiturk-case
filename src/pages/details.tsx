import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
// @ts-ignore
import dateFormat from "dateformat";
import "../styles/style.scss";

interface IMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

const Details: React.FC = () => {
  let { id } = useParams();
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  useEffect(() => {
    id && fetch(`https://api.themoviedb.org/3/search/movie?api_key=615b36e8cc723665720e211942733301&language=en-US&query=${id}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
  }, [id]);

  return (
    <>
      <h1 className='details-header'>Movies for {id}</h1>
      <div className='movie'>
        {
          movies && movies.map((item: IMovie) => 
            <div className='movie-card'>
              <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/>
              <div className='movie-card-bottom'>
                <h3 className='movie-card-header'>{item.title}</h3>
                <p className='movie-card-detail'>{item.overview}</p>
                <small className='movie-card-date'>{dateFormat(item.release_date, "dd, mmmm, yyyy")}</small>
              </div>
            </div>
          )
        }
      </div>
    </>
  ) 
}

export default Details
