import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {newcinema , box} from "./newcinema.css";
import { useEffect, useState } from "react";

// // import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";

// Swiper 모듈 사용 설정
// SwiperCore.use([Pagination, Navigation, Autoplay]);

export const NewCinema =  () => {
  const API_KEY = '2b8dbf43dbbe9ae066cca88158fa0193';
  const baseURL = 'https://api.themoviedb.org/3';

  

    const fetchMovies = async (endpoint) => {
        try {
            const response = await fetch(`${baseURL}/movie/${endpoint}?language=en-US&page=1`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBmNjNmZTI4OTFkMWE4ZjIyMjgzYTdkNjJiNzMxMiIsIm5iZiI6MTcyODg4MDc0MS4wMzY1NDQsInN1YiI6IjY3MGM4NjBiNGRmNTlhNjA4YzYzNzY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JI7ppKPLAtd1pBoMM-1grlHUg5S5u9iLg5PiHU2XSME'
                }
            });
            console.log('?');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            
            return result.results.slice(0, 3).map(data => ({
                id: data.id,
                title: data.title,
                poster: data.poster_path
            }));
            
        } catch (error) {          
            throw new Error(`Failed to fetch data: ${error}`);
        }
    };

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [totalData, setTotalData] = useState({});
    const [loading, setLoading] = useState(true);
 
      const navigate = useNavigate();
      const onsubScriptPage = (itemname: string) => {
        console.log(itemname);
        navigate(`/product/${itemname}`);
    };

    const removeDuplicates = (array) => {
      const uniqueIds = new Set();
      return array.filter(item => {
          if (!uniqueIds.has(item.id)) {
              uniqueIds.add(item.id);
              return true;
          }
          return false;
      });
    }

      
    useEffect(() => {
        const fetchData = async () => {
            try {
                const popular = await fetchMovies('popular');
                const topRated = await fetchMovies('top_rated');
                const upcoming = await fetchMovies('upcoming');
                const allMovies = [...popular, ...topRated, ...upcoming];
                const uniqueMovies = removeDuplicates(allMovies);

                // setPopularMovies(popular);
                // setTopRatedMovies(topRated);
                // setUpcomingMovies(upcoming);                
                setTotalData(uniqueMovies);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    console.log(totalData);
    
    if (loading) {
      return <div>로딩 중...</div>;      
    }  
    






    return (
        <>
            <Swiper className={newcinema}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
              
                {totalData?.map((movie )=>(
                    <SwiperSlide key={movie.id} onClick={()=>onsubScriptPage(movie.id)}>
                      <div style={{width:'100%',height:'100%',background:`url(https://image.tmdb.org/t/p/w500/${movie.poster}) center no-repeat`,backgroundSize:'100%',}}>{movie.title}</div>
                    </SwiperSlide>
                ))}                
            </Swiper>
      </>
    )

  }
