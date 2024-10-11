import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {newcinema} from "./newcinema.css";

export const NewCinema = async () => {

    const API_KEY = '2b8dbf43dbbe9ae066cca88158fa0193';
    const baseURL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';

    const fetchData = async (date) => {
        const response = await fetch(`${baseURL}?key=${API_KEY}&targetDt=${date}`);
        const data = await response.json();
        console.log(data);
    };

    // 사용 예제
    const data : any  = fetchData('20241009');    

    return (
        <>
            <Swiper className={newcinema}>
                
            {data?.map((d : any )=>{
                <SwiperSlide key ={d.movieNm}>{d.movieNm}</SwiperSlide>
            })}
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
      </>
    )

}
