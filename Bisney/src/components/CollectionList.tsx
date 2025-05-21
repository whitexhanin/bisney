import * as styles from './collectionlist.css';
import { fetchers } from "@/utils/fetchers";
import { Link, useLocation, useParams } from "react-router-dom";
import useSWR from "swr";

const CollectionList = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const value = query.get('q');
    const {data , error} =  useSWR(`https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false&language=en-US&page=1`,fetchers)    

    if (error) console.error(error);
    if (!data) console.log('Loading...');
    if (data) console.log(data);

    return (       
        <>
            <h2 className={styles.h2}>{(value)?.toUpperCase()}</h2>
            {/* 리스트 아이템 클릭 시 products/:id 로 이동*/}
            <div className={styles.itemcontainer}>                
                <div className={styles.itemlist}>
                    {
                        data?.results?.map((d)=>( 
                            d.poster_path !== null && d.poster_path !== undefined && d.title !== null &&
                            <Link to ={`/products/${d.id}`} key={d.id} className={styles.item} style={{ background:`url(https://image.tmdb.org/t/p/w500/${d.poster_path}) center no-repeat`,backgroundSize:'cover'}}>
                            </Link>           
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default CollectionList;