import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {newcinema} from "./newcinema.css";
import { useEffect, useState } from "react";

// // import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";

// Swiper 모듈 사용 설정
// SwiperCore.use([Pagination, Navigation, Autoplay]);

interface Movie {
    movieCd: string,
    movieNm: string,
}

export const NewCinema =  () => {

  //인기 데이터
  const [popular , setPopular] = useState();

  const fetchPopular = async() => {
    // try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,{
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBmNjNmZTI4OTFkMWE4ZjIyMjgzYTdkNjJiNzMxMiIsIm5iZiI6MTcyODg4MDc0MS4wMzY1NDQsInN1YiI6IjY3MGM4NjBiNGRmNTlhNjA4YzYzNzY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JI7ppKPLAtd1pBoMM-1grlHUg5S5u9iLg5PiHU2XSME'
        }
      })
      .then((response)=>response.json())
      .catch((error)=> {throw new Error(`${error}`)})

      
      const initData = response.results.slice(0,3).map((data)=>{
        return {
          title : data.title,          
          poster : data.poster_path,          
        }
      })      
      setPopular(initData);
      // if(response.ok){
      //   const result = await response.json();   
      //   const top3 =   result.results.slice(0,3)      
      //   return   top3;
      // }
      // else{
      //   console.error('error',response.statusText);
      // }
    // }
    // catch (error) {
    //   throw new Error(`Faild to ${error} data`)      
    // }

  }
  useEffect(()=>{
    fetchPopular();
  },[])

  
console.log(popular);
  //인기 3개 : fetchPopular
  //최고평 3개 : fetchToprated
  //곧 출시될 3개 : fetchUpcoming

//   const fetchPopular = async () => {
//     const type = 'popular';
//     await fetchBasic(type);
//   }

// console.log(fetchPopular())
//     const { id } = useParams();
//     const API_KEY = '2b8dbf43dbbe9ae066cca88158fa0193';
//     const baseURL = 'https://api.themoviedb.org/3/movie/';
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

    // const fetchBasic = async (type) => {
    //     try {
    //         const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,{
    //           method: 'GET',
    //           headers: {
    //             accept: 'application/json',
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBmNjNmZTI4OTFkMWE4ZjIyMjgzYTdkNjJiNzMxMiIsIm5iZiI6MTcyODg4MDc0MS4wMzY1NDQsInN1YiI6IjY3MGM4NjBiNGRmNTlhNjA4YzYzNzY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JI7ppKPLAtd1pBoMM-1grlHUg5S5u9iLg5PiHU2XSME'
    //           }
    //         });
    //         if (response.ok) {
    //             const result = await response.json();
    //             console.log(result)
    //             // setData(result);
    //             // setLoading(false);
    //         } else {
    //             console.error('Error fetching data:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // if (loading) {
    //     return <div>로딩 중...</div>;
    // }

    // if (!data) {
    //     return <div>데이터가 없습니다</div>;
    // }

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer 2c0f63fe2891d1a8f22283a7d62b7312'
  //   }
  // };
  
  // await fetch('https://api.themoviedb.org/3/authentication', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBmNjNmZTI4OTFkMWE4ZjIyMjgzYTdkNjJiNzMxMiIsIm5iZiI6MTcyODg4MDc0MS4wMzY1NDQsInN1YiI6IjY3MGM4NjBiNGRmNTlhNjA4YzYzNzY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JI7ppKPLAtd1pBoMM-1grlHUg5S5u9iLg5PiHU2XSME',
  //   }
  // };

  // await fetch('https://api.themoviedb.org/3/movie/550', options) // 유효한 엔드포인트로 변경하세요
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok' + response.statusText);
  //     }
  //     return response.json();
  //   })
  //   .then(data => console.log(data))
  //   .catch(err => console.error('Fetch error: ', err));


  //   const API_KEY = '2c0f63fe2891d1a8f22283a7d62b7312';
  //   const baseURL = 'https://www.themoviedb.org/authenticate';
   

  //   const [data, setData] = useState<Movie[]>([]);

  //   const fetchData = async (date : string) => {
  //     try {
  //       const response = await fetch(`${baseURL}/${API_KEY}`, {
  //         method: 'GET',
  //       });
        
  //       if (response.ok) {
  //         const result = await response.json();
  //         setData(result);
  //         console.log(data);
  //       } else {
  //         console.error('Error fetching data:', response.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   useEffect(() => {
  //     fetchData('20241009');
  //   }, []);

  //   console.log(data);
  
  //   if (!data) {
  //     return <div>로딩 중...</div>;
  //   }
    
    const navigate = useNavigate();
    const onsubScriptPage = (itemname: string) => {
      console.log(itemname);
      navigate(`/product/${itemname}`);
  };

    return (
        <>
            {/* <Swiper className={newcinema}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide></SwiperSlide> */}
                {/* {popularMovies?.map((movie )=>(
                    <SwiperSlide key={movie.id} onClick={()=>onsubScriptPage(movie.id)}>{movie.title}</SwiperSlide>
                ))}                 */}
            {/* </Swiper> */}
      </>
    )

}
