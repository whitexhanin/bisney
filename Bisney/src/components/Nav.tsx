import { Link, useLocation} from "react-router-dom";
import * as styles from "./nav.css";
import { useQuery } from '@tanstack/react-query';
import { getUser } from "@/utils/getUser";

export const Nav = () => {
    const location = useLocation();
    const mydataquery = useQuery({ queryKey: ['user'], queryFn:getUser})
    console.log('mydata',mydataquery.data)

    console.log(location);

    return (
        <>
            <nav className={styles.nav}>
                <Link to='/home' className={`${styles.home} ${location.pathname == '/home'? 'on' : 'off'}`} >home</Link>
                <Link to='/search' className={`${styles.search} ${location.pathname == '/search'? 'on' : 'off'}`}>Search</Link>
                <Link to='/download' className={`${styles.download} ${location.pathname == '/download'? 'on' : 'off'}`}>down</Link>
                <Link to='/profile' className={`${styles.profile} ${location.pathname == '/profile'? 'on' : 'off'}`}>
                    <img src={mydataquery.data?.image} alt="" style={{width:'60px',height:'60px'}}/>
                    <span style={{paddingRight:'20px'}}>{mydataquery.data?.nickname}</span>
                    <ul className={`${styles.profileMenu}`}>
                        <li>
                            <Link to="">프로필 추가</Link>
                        </li>
                        <li>
                            <Link to="/profile-modifylist">프로필 수정</Link>
                        </li>
                        <li>로그아웃</li>
                    </ul>
                </Link>                
            </nav>
        </>
    )
}