import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ()=> {
    const { id } = useParams();
    const API_KEY = '2b8dbf43dbbe9ae066cca88158fa0193';
    const baseURL = 'https://api.themoviedb.org/3/movie/';
   console.log(typeof(id));

    const [data, setData] = useState(null);

    const fetchData = async (id : string) => {
      try {
        const response = await fetch(`${baseURL}${id}?language=en-US`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBmNjNmZTI4OTFkMWE4ZjIyMjgzYTdkNjJiNzMxMiIsIm5iZiI6MTcyODg4MDc0MS4wMzY1NDQsInN1YiI6IjY3MGM4NjBiNGRmNTlhNjA4YzYzNzY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JI7ppKPLAtd1pBoMM-1grlHUg5S5u9iLg5PiHU2XSME'
          }
        });
        if(!response.ok){
          throw new Error(`HTTP error! status: ${Error}`)
        }

        const result = await response.json();               
        setData(result);
      } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);      
      }
    };
  
    useEffect(() => {
      fetchData(id);
    }, []);

    console.log(data);
  
    if (!data) {
      return <div>로딩 중...</div>;
    }
    
    // const { movieInfo } = result;

    return (
        <>        
            <div>
                <h2>Product Detail for ID: {id}</h2>
            </div>
            <div>
                <div style={{width:'300px',height:'400px',background:`url(https://image.tmdb.org/t/p/w500/${data.poster_path}) center no-repeat`,backgroundSize:'100%',}}></div>
                <p>Title: {data.title}</p>
                 <p>Director: {data.genres.map(gen => gen.name).join(', ')}</p> 
                <p>overview: {data.overview}</p>
                {/* 추가적인 정보들 */}
            </div>
        </>
    )
}

export default ProductDetail;