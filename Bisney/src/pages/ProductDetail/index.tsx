import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Movie {
    
}

const ProductDetail = ()=> {
    const { id } = useParams();
    const API_KEY = '2b8dbf43dbbe9ae066cca88158fa0193';
    const baseURL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json';
   console.log(typeof(id));

    const [data, setData] = useState(null);

    const fetchData = async (id : string) => {
      try {
        const response = await fetch(`${baseURL}?key=${API_KEY}&movieCd=${id}`, {
          method: 'GET',
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result)
          setData(result);
          
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData(id);
    }, []);

    console.log(data);
  
    if (!data) {
      return <div>로딩 중...</div>;
    }
    
    const { movieInfo } = data.movieInfoResult;

    return (
        <>
        ProductDetail
            <div>
                <h2>Product Detail for ID: {id}</h2>
            </div>
            <div>
                <p>Title: {movieInfo.movieNm}</p>
                <p>Director: {movieInfo.directors.map(director => director.peopleNm).join(', ')}</p>
                <p>Release Date: {movieInfo.openDt}</p>
                {/* 추가적인 정보들 */}
            </div>
        </>
    )
}

export default ProductDetail;