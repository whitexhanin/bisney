import { useEffect, useState } from "react";

const GenresAticle = () => {

    const API_KEY = '2b8dbf43dbbe9ae066cca88158fa0193';
    const baseURL = 'https://api.themoviedb.org/3';
    

        const fetchGenres = async (endpoint) => {
            try {
                const response = await fetch(`${baseURL}/${endpoint}`, {
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
                
                return result.results.slice(0, 10);
                
            } catch (error) {          
                throw new Error(`Failed to fetch data: ${error}`);
            }
        };

        // fetchGenres()
        const [pixar , setPixar] = useState([]);
        const [popular , setPopular] = useState([]);
        const [company , setCompany] = useState([]);
        const [loading , setLoading] = useState(false);

        useEffect( ()=>{
            const fetchData = async() => {
                const fetchPixar = await fetchGenres('discover/movie?&with_companies=3&language=en-US&page=1');
                const fetchPopular = await fetchGenres('movie/popular?&language=en-US&page=1');            
                const fetchCompany = await fetchGenres('search/company?query=disney&page=1');
                setPixar (fetchPixar);
                setPopular(fetchPopular);
                setLoading(false);
                setCompany(fetchCompany);
            }    
            fetchData();      
        },[])
        console.log(popular);
        console.log(pixar);
        console.log(company);

    return (
        <>
            <div></div>
        </>
    )

}

export default GenresAticle;