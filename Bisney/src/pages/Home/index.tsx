import { NewCinema } from '@/components/NewCinema';
import  {home , logo , img} from './styles.css';
import Recommend1 from '@/components/Recommend1';
import RecommendList from '@/components/RecommendList';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Nav } from '@/components/Nav';
import AfterLayout from '@/layouts/AfterLayout';
import { getUserList } from '@/utils/getUserList';
 
const queryClient = new QueryClient();

const Home  = () => {    
    const navigate = useNavigate();
    // const userquery = useQuery({ queryKey: ['userlist'] , queryFn: getUserList} );
    // const [randomNumbers, setRandomNumbers] = useState();
    // const [mydata, setMydata] = useState({});

    // useEffect(() => {
    //     if (userquery.data) {
    //         const randomNums = Math.floor(Math.random() * userquery.data.length);
    //         setRandomNumbers(randomNums);
    //         setMydata(userquery.data[randomNumbers])            
    //     }
    // }, [userquery.data]);
    // console.log(userquery.data)
    // console.log('random',randomNumbers , mydata)

    // console.log(userquery.data());
    const cookie = document.cookie.split(';');
    const keyword = 'Authorization='    

    // const url = 'https://api.themoviedb.org/3/account/21570059';
    // const options = {
    //     method: 'GET',                     
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzBmNjNmZTI4OTFkMWE4ZjIyMjgzYTdkNjJiNzMxMiIsIm5iZiI6MTczMDE2NjEwMi4zNTg3NDksInN1YiI6IjY3MGM4NjBiNGRmNTlhNjA4YzYzNzY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Rd6L2-PKHAmYHVPgYHvdacAs3JO9LvcPzokfb22zKU'
    //     },
    //     // body: JSON.stringify({email,passwordData.password})
    //     // credentials: 'include' as RequestCredentials      
    // };

    // fetch(url, options)
    // .then(res => res.json())
    // // .then(json => navigate("/home"))
    // .catch(err => console.error(err));
   
    useEffect(()=>{
        if(cookie.includes(keyword)){
            return navigate('/');
        }
    },[cookie])
    
    
    return (
        <AfterLayout>
            <div className={home}>
                <h2 className={logo}>
                    <img className={img} src={`/logo/original.png`} alt="Disney+" />
                </h2>
                {/* 최신/인기 슬라이드 */}
                <QueryClientProvider client={queryClient}>
                    <NewCinema/>
                </QueryClientProvider>
                {/* diseny,pixar ,marvel,starwars,nationalgeographic,star 채널 버튼 */}
                <RecommendList />
                {/* <Recommend2 /> */}
                {/* 오늘밤 뭐볼까 추천 아이템 나열 슬라이드  디자인 1 - 작은사이즈*/}
                {/* 디즈니+ 최신작 아이템 나열 슬라이드 디자인 1 - 작은사이즈*/}
                {/* 시청중인콘텐츠 */}
                {/* 미드 마니아 정주행 추천작 아이템 나열 슬라이드 디자인 2 - 큰사이즈*/}
            </div>
        </AfterLayout>
    )
}

export default Home;