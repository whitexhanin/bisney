import { fetchers } from '@/utils/fetchers';
import * as styles from './searchinput.css'
import useSWR from 'swr';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const navigate = useNavigate();
    const [inputvalue , setInputvalue] = useState();    
    
    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${e.currentTarget.search.value}`);
    }

    return(
        <>  <form onSubmit={onSubmit}>
                <div className={styles.searchInput}>
                    <input name = "search" type="search" value ={inputvalue} placeholder="Search..." className={styles.inputStyle} />
                    <button className={styles.buttonStyle}>Search</button>
                </div>          
            </form>
        </>
    )

}

export default SearchInput;