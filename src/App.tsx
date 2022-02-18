import {useState, useEffect} from 'react'
import Card from './components/card';
import TheOffice from './assets/theoffice.png'
import GameOfThrones from './assets/gameofthrones.jpeg'
import Image1 from './assets/image1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/scss';
import "swiper/scss/navigation";
import "./styles/style.scss";
import { Link } from "react-router-dom";

interface IGenre {
  id: number;
  name: string;
}

function App() {
  const [genres, setGenres] = useState<IGenre[] | null>(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=615b36e8cc723665720e211942733301&language=en-US")
    .then(response => response.json())
    .then(data => {
      setGenres(data.genres)
    })
    .catch(err => {
      console.error(err);
    });
  }, [])

  return (
      <div className='main'>
        <h1 className='header'>Suggested series</h1>
        <div className='swiper'>
          <Swiper 
            navigation 
            loop 
            modules={[Navigation, Autoplay]}   
            autoplay={{ delay: 1000}} 
            className="swiper-wrapper"
          >
            <SwiperSlide className='swiper-slide'> 
            <div className='swiper-img'>
                <img src={TheOffice} alt="TheOffice" />
            </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'> 
            <div className='swiper-img'>
                <img  src={GameOfThrones} alt="GameOfThrones" />
            </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'> 
            <div className='swiper-img'>
                <img src={Image1} alt="TheBoys" />
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <h1 className='header'>Genres</h1>
        <div className='card-bottom'>
          <Swiper
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
          >
            {genres && genres.filter(item => item.name !== "Animation").map((item: IGenre) => 
              <SwiperSlide>
                <Link  to={"/"+item.name}>
                  <Card key={item.id}>
                    {item.name}
                  </Card>
                </Link>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
  )
}

export default App;