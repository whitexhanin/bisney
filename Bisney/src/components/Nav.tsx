import { Link, useLocation} from "react-router-dom";
import * as styles from "./nav.css";

export const Nav = () => {
    const location = useLocation();
    console.log(location);

    return (
        <>
            <nav className={styles.nav}>
                <Link to='/home' className={`${styles.home} ${location.pathname == '/home'? 'on' : 'off'}`} >home</Link>
                <Link to='/search' className={`${styles.search} ${location.pathname == '/search'? 'on' : 'off'}`}>Search</Link>
                <Link to='/download' className={`${styles.download} ${location.pathname == '/download'? 'on' : 'off'}`}>down</Link>
                <Link to='/profile' className={`${styles.profile} ${location.pathname == '/profile'? 'on' : 'off'}`}>Profile</Link>
            </nav>
        </>
    )
}