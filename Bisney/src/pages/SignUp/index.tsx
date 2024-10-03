import { Link } from 'react-router-dom';
import { logo ,img  } from './styles.css';
import { ChangeEventHandler, useCallback, useState } from 'react';
import Checkbox from '@/components/Checkbox';
import { CheckboxGroup } from '@/components/CheckboxGroup';


const SignUp  = () => {
    const [now , setNow] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [checkPassword , setCheckPassword] = useState('');
    const [checkbox , setCheckbox] = useState(false);
    const [service , setService] = useState(false);
    const [marketing , setMarketing] = useState(false);


    const onChangeEmail : ChangeEventHandler <HTMLInputElement> = useCallback((e)=>{
        setEmail(e.target.value);
    },[setEmail]);

    const onSubmit : any = (e : any) => {
        const res = fetch('api',{
            method : 'post',

        })
        
    }

    return (
        <>
            <h2 className={logo}>
                <img className={img} src={`public/logo/original.png`} alt="Disney+" />
            </h2>
            <div>
                <div className="locate">
                    <span className="now">
                    {now}
                    </span>
                    <span>/</span>
                    <span>3</span>
                    <span>단계</span>
                </div>
                <form action="onSubmit">
                    <div className="step1">
                        <p className="title">이메일을 입력하세요</p>                        
                        <input type="email" className="signupinput" value={email} placeholder='이메일' onChange={onChangeEmail}/>
                        <CheckboxGroup label="" values={} onChange={setColors}>
                            <Checkbox value={}>
                                디즈니+에 관한 최신 소식, 특별 혜택 및 기타 정보를 받아 보겠습니다.
                            </Checkbox>
                        </CheckboxGroup>
                        <div>
                            <input type="checkbox" name="signupstep1" id="signup-ck1" />
                            <label htmlFor="signup-ck1">디즈니+에 관한 최신 소식, 특별 혜택 및 기타 정보를 받아 보겠습니다.</label>
                        </div>
                        <div>
                            <input type="checkbox" name="signupstep1" id="signup-ck2" />
                            <label htmlFor="signup-ck2">
                                본인은 만 19세 이상이며 
                                <button className="popupbutton">디즈니+ 이용약관</button>
                                에 동의 합니다.
                            </label> 
                        </div>
                        <div>
                            <input type="checkbox" name="signupstep1" id="signup-ck3" />
                            <label htmlFor="signup-ck3">
                                디즈니+의
                                <button className="popupbutton">개인정보 수집 및 이용</button>
                                에 동의 합니다.
                            </label>
                        </div>
                        <div className="box">
                            <div className="txt">
                                디즈니는 위의 사용자 동의에 따라 정보를 이용 할 수 있습니다.
                            </div>
                            <button disabled={!service}>동의하고 진행하기</button>
                        </div>
                    </div>
                </form>
            </div>

        
        </>
    )
}

export default SignUp;