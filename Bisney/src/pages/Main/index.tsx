import SignupLayout from "@/layouts/Signup";
import { Link } from "react-router-dom";
import  * as styles from './styles.css';


const Main = () => {
    return (
        <>
            <SignupLayout>  
                <div className={styles.main}>
                    <p className={styles.h2}>
                        이 모든 이야기가 여기에
                        지금 스트리밍 중
                    </p>   
                    <p>지금 가입 하세요.</p>
                    <Link className={styles.Link} to='/signup/create-email'>SignUp</Link>   
                    <br/>
                    <p>이미 디즈니에 가입하셨나요?</p>
                    <Link className={styles.Link} to='/login/create-email'>Login</Link>
                </div>
            </SignupLayout>
        </>
    )
}

export default Main;

