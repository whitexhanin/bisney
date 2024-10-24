import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as styles from './styles.css';

const ProductList = () => {

    

    const params = useParams();
    console.log(params);

    const API_KEY = '2b8dbf43dbbe9ae066cca88158fa0193';
    const baseURL = 'https://api.themoviedb.org/3';

    const [data , setData] = useState([]);

    const fetchMovies = async (endpoint) => {
        //2024 disney
        // 'https://api.themoviedb.org/3/search/movie?query=disney&include_adult=false&language=en-US&page=1&year=2024'
        //moana 유사
        //'https://api.themoviedb.org/3/movie/1108427/similar?language=en-US&page=1'


        try {
            const response = await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1'
                // `${baseURL}/discover/${endpoint}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`
                ,
                 {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBmNjNmZTI4OTFkMWE4ZjIyMjgzYTdkNjJiNzMxMiIsIm5iZiI6MTcyODg4MDc0MS4wMzY1NDQsInN1YiI6IjY3MGM4NjBiNGRmNTlhNjA4YzYzNzY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JI7ppKPLAtd1pBoMM-1grlHUg5S5u9iLg5PiHU2XSME'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            
            return setData(result.results.slice(0, 10));            
            
        } catch (error) {          
            throw new Error(`Failed to fetch data: ${error}`);
        }
    };

    // const [popularMovies, setPopularMovies] = useState([]);
    // const [topRatedMovies, setTopRatedMovies] = useState([]);
    // const [upcomingMovies, setUpcomingMovies] = useState([]);
    // const [totalData, setTotalData] = useState({});
    const [loading, setLoading] = useState(true);
 
      const navigate = useNavigate();
      const onsubScriptPage = (itemname: string) => {
        console.log(itemname);
        navigate(`/products/${itemname}`);
    };

    // const removeDuplicates = (array) => {
    //   const uniqueIds = new Set();
    //   return array.filter(item => {
    //       if (!uniqueIds.has(item.id)) {
    //           uniqueIds.add(item.id);
    //           return true;
    //       }
    //       return false;
    //   });
    // }

      
    useEffect(() => {
        fetchMovies(params.id);
        setLoading(false);
        // const fetchData = async () => {
        //     try {
        //         const popular = await fetchMovies('popular');
        //         const topRated = await fetchMovies('top_rated');
        //         const upcoming = await fetchMovies('upcoming');
        //         const allMovies = [...popular, ...topRated, ...upcoming];
        //         const uniqueMovies = removeDuplicates(allMovies);
             
        //         setTotalData(uniqueMovies);
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        // fetchData();
    }, []);
    // console.log(totalData);
    
    if (loading) {
      return <div>로딩 중...</div>;      
    }  

    console.log(data);

    return(
        <>
            <h2 className={styles.h2}>{(params.id)?.toUpperCase()}</h2>
            {/* 리스트 아이템 클릭 시 products/:id 로 이동*/}
            <div className={styles.itemcontainer}>
                <div className={styles.itemlist}>
                    {
                        data.map((d)=>(
                            <div key={d.id} className={styles.item} style={{background:`url(https://image.tmdb.org/t/p/w500/${d.poster_path}) center no-repeat`,backgroundSize:'cover',}}></div>                    
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProductList;