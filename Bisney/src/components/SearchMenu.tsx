import { Link } from "react-router-dom";
import * as styles from "./searchmenu.css";


const SearchMenu = () => {
    return (
        <>
            <div className={styles.menu}>
                {/* 동일 page에 파라미터 주고 받아서 api 끌고와 작성하기 */}                                
                <Link to={'/productlist/trending'}>트렌드</Link>
                <Link to={'/productlist/tv'}>인기 TV 시리즈</Link>
                <Link to={'/productlist/movie'}>인기 Movie</Link>
            </div>
        </>
    )
}

export default SearchMenu;