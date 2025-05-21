import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as styles from './styles.css';
import { fetchers } from "@/utils/fetchers";
import useSWR from "swr";
import AfterLayout from "@/layouts/AfterLayout";
import { Back } from "@/components/Back";

const ProductList = () => {

    const baseURL = 'https://api.themoviedb.org/3';
    const params = useParams();
    const [secondURL , setSecondURL] = useState('');  

    useEffect(() => {
        switch (params.id) {
            case "trending": 
                setSecondURL('/trending/all/day?language=en-US');
                break;
        
            case "tv" : 
                setSecondURL('/tv/top_rated?language=en-US&page=1');
                break;

            case "movie": 
                setSecondURL('/movie/top_rated?language=en-US&page=1');
                break;
        
            default:
                setSecondURL('');
                break;
        }
    }, [params.id]);
    
    const { data, error } = useSWR(secondURL ? `${baseURL}${secondURL}` : null, fetchers);

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;

    return(
        <AfterLayout>
            <Back/>
            <h2 className={styles.h2}>{(params.id)?.toUpperCase()}</h2>
            {/* 리스트 아이템 클릭 시 products/:id 로 이동*/}
            <div className={styles.itemcontainer}>
                <div className={styles.itemlist}>
                    {
                        data?.results?.map((d)=>(
                            <div key={d.id} className={styles.item} style={{background:`url(https://image.tmdb.org/t/p/w500/${d.poster_path}) center no-repeat`,backgroundSize:'cover',}}></div>                    
                        ))
                    }
                </div>
            </div>
        </AfterLayout>        
    )
}

export default ProductList;