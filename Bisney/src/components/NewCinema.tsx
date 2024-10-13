import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {newcinema} from "./newcinema.css";
import { useEffect, useState } from "react";

// // import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { redirect, useNavigate } from "react-router-dom";

// Swiper 모듈 사용 설정
// SwiperCore.use([Pagination, Navigation, Autoplay]);

interface Movie {
    movieCd: string,
    movieNm: string,
}

export const NewCinema = () => {
    const navigation = useNavigate();
    const API_KEY = '2b8dbf43dbbe9ae066cca88158fa0193';
    const baseURL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';

   

    const [data, setData] = useState<Movie[]>([]);

    const fetchData = async (date : string) => {
      try {
        const response = await fetch(`${baseURL}?key=${API_KEY}&targetDt=${date}`, {
          method: 'GET',
        });
        if (response.ok) {
          const result = await response.json();
          setData(result.boxOfficeResult.dailyBoxOfficeList);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData('20241009');
    }, []);
    console.log(data);
  
    if (!data) {
      return <div>로딩 중...</div>;
    }

    const onsubScriptPage = (e) => {
        const item = e.target;
        console.log(e);
        console.log('ii',item.movieCd);
        redirect(`/product/${item.movieCd}`)
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
                
                {data?.map((d : any )=>(
                    <SwiperSlide key ={d.movieNm} onClick={onsubScriptPage}>{d.movieNm}</SwiperSlide>
                ))}                
            </Swiper>
      </>
    )

}
