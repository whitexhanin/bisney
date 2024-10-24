import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade';

import {newcinema , box} from "./newcinema.css";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade ,  EffectCoverflow } from 'swiper/modules';
import { Link, Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import { useGetQuery } from "@/hooks";

export const NewCinema =   () => {

  const { data : popularData } = useGetQuery("/movie/popular?language=en-US&page=1",{});
  const { data: topRatedData } = useGetQuery("/movie/top_rated?language=en-US&page=1",{});
  const { data: upcomingData } = useGetQuery("/movie/upcoming?language=en-US&page=1",{});

  const [totalData, setTotalData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const navigate = useNavigate();

  const onsubScriptPage = (itemname: string) => {
    navigate(`/products/${itemname}`);
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
  };

  

  useEffect(() => {

    if (popularData && topRatedData && upcomingData) {
      const allMovies = [
        ...popularData.results.slice(0,3),
        ...topRatedData.results.slice(0,3),
        ...upcomingData.results.slice(0,3)
      ];
      const uniqueMovies = removeDuplicates(allMovies);
      
      setTotalData(uniqueMovies);
      setLoading(false);
    }
  }, [popularData, topRatedData, upcomingData]);
  console.log(totalData);
    if (loading) {
      return <div>로딩 중...</div>;      
    }  
    

    return (
        <>                        
            <Swiper className={newcinema}
            modules={[Navigation, Pagination, Scrollbar, A11y , EffectCoverflow]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            effect={'coverflow'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
                scale:1,                    
              }}
            loop={true}
            speed={1000}           
              
            >
              
                {totalData?.map((movie )=>(
                    <SwiperSlide key={movie.id} onClick={()=>onsubScriptPage(movie.id)}>
                      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} style={{objectFit:"fill"}}/>                      
                    </SwiperSlide>
                ))}                
            </Swiper>
      </>
    )

  }
