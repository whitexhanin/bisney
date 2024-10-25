import { Link, redirect, useNavigate } from 'react-router-dom';
import { boxcontainer , title , inputContainer , inputStyle ,labelStyle ,activeLabelStyle , hasLabelStyle , nextButton , checkboxlist , txt , showpassword , message , bar , value , emailtit , emailadd} from './styles.css';
import { ButtonHTMLAttributes, ChangeEventHandler,  MouseEventHandler, useCallback, useContext, useEffect, useState } from 'react';
import SignupLayout from '@/layouts/Signup';
import { useEmail } from '@/components/EmailProvider';

const CreatePassword = () => {
    const { email, setEmail } = useEmail();
    const [passwordData , setPasswordData] = useState({
        password: '',
        showPassword : false,
        isValid : false,
        isHasPassword : false,
        ismsgValidScore : 0,
    })

    const onClickShowPassword: MouseEventHandler<HTMLButtonElement>  = useCallback((e) => {
        setPasswordData((prev)=>{
            return {
                ...prev,
                showPassword : !prev.showPassword
            }
        })
    },[])
    
    const validatePassword = (password: string) => {
        const regexPassword = /^(?=.*[0-9!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/;       
        return regexPassword.test(password);
    };
    
    const checkPassword = (password : string)=>{
        let score = 0
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        const hasUpperCase = /[A-Z]/;
        const hasLowerCase = /[a-z]/;
        const hasNumber = /\d/;
        const hasLength = 6;
        

        if(hasSpecialChar.test(password)){
            score += 1;
        }
        if(hasUpperCase.test(password)){
            score += 1;
        }
        if(hasLowerCase.test(password)){
            score += 1;
        }
        if(hasNumber.test(password)){
            score += 1;
        }
        if(hasLength <= password.length){
            score += 1;
        }                
        
        return score
    }

    //score에 따른 

    const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPasswordData((prev )=>{
            return {
                ...prev,
                password : newPassword,
                isValid :validatePassword(newPassword),
                isHasPassword : newPassword.length > 0? true : false, 
                ismsgValidScore : checkPassword(newPassword),
            }
        })    
      },[]);

      const navigate = useNavigate();
    const onClickgoHome = ()=>{
            navigate("/home");
        }

    return (
        <SignupLayout>
            <div className={boxcontainer}>
                <p className={title}>비밀번호를 생성하세요</p>
                <div className="myemail">
                    <span className={emailtit}>로그인에 사용할 이메일</span>
                    <span className={emailadd}>
                        {email}
                    </span>
                </div>
                <div>
                    <div className={inputContainer}>
                        <input type={passwordData.showPassword?'text' : "password"} name="" id="" value={passwordData.password} onChange={onChangePassword} className={inputStyle}/>
                        <label htmlFor="email" className={`${labelStyle} ${activeLabelStyle} ${passwordData.isHasPassword ? hasLabelStyle : ''}`}>비밀번호</label>
                        <button type = "button" className={showpassword} onClick={onClickShowPassword}>{!passwordData.showPassword? 
                            <svg aria-hidden="true" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="" fill="#86898f" fillRule="evenodd" clipRule="evenodd" d="M21.666 1.74742C22.0788 1.3805 22.1159 0.74843 21.749 0.335647C21.3821 -0.0771359 20.75 -0.114317 20.3373 0.252601L17.6904 2.60537C15.9141 1.55556 14.021 0.999981 12.0011 0.999981C7.5541 0.999981 3.72153 3.69304 0.396231 8.42475L-0.0078125 8.99968L0.396182 9.57465C1.72195 11.4615 3.12847 13.0242 4.62251 14.2213L2.33725 16.2526C1.92447 16.6195 1.88729 17.2516 2.25421 17.6644C2.62113 18.0772 3.2532 18.1143 3.66598 17.7474L6.31249 15.395C8.08863 16.4445 9.98151 17 12.0011 17C16.4481 17 20.2807 14.3069 23.606 9.57521L24.0101 9.00028L23.6061 8.42531C22.2805 6.53872 20.8741 4.97616 19.3803 3.77915L21.666 1.74742ZM16.1043 4.0152C14.7689 3.33295 13.4023 2.99998 12.0011 2.99998C8.63259 2.99998 5.46419 4.92433 2.44714 8.99979C3.65324 10.6293 4.88362 11.9149 6.14137 12.8712L7.67403 11.5088C7.24544 10.7714 7 9.91434 7 8.99998C7 6.23856 9.23858 3.99998 12 3.99998C13.1248 3.99998 14.1629 4.37142 14.9983 4.99834L16.1043 4.0152ZM16.3271 6.49309L17.8614 5.12923C19.119 6.08545 20.3492 7.37095 21.5551 9.00018C18.5381 13.0756 15.3697 15 12.0011 15C10.6001 15 9.23379 14.6671 7.89858 13.9851L9.00349 13.003C9.83855 13.6291 10.876 14 12 14C14.7614 14 17 11.7614 17 8.99998C17 8.08642 16.755 7.23008 16.3271 6.49309ZM13.4511 6.37364C13.0211 6.13554 12.5264 5.99998 12 5.99998C10.3431 5.99998 9 7.34313 9 8.99998C9 9.401 9.07868 9.78364 9.22146 10.1333L13.4511 6.37364ZM10.551 11.6274L14.7794 7.86881C14.9216 8.21789 15 8.59978 15 8.99998C15 10.6568 13.6569 12 12 12C11.4745 12 10.9805 11.8649 10.551 11.6274Z"></path>
                            </svg>
                        :                       
                            <svg aria-hidden="true" width="24" height="18" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="" fill = "#86898f" fillRule="evenodd" clipRule="evenodd" d="M12.0011 14C8.63237 14 5.4638 12.0754 2.44714 7.9998C5.46419 3.92435 8.63259 2 12.0011 2C15.3699 2 18.5384 3.9246 21.5551 8.00019C18.5381 12.0757 15.3697 14 12.0011 14ZM12.0011 0C7.5541 0 3.72153 2.69306 0.396231 7.42477L-0.0078125 7.9997L0.396182 8.57467C3.72105 13.3066 7.55383 16 12.0011 16C16.4481 16 20.2807 13.3069 23.606 8.57523L24.0101 8.0003L23.6061 7.42533C20.2812 2.69339 16.4484 0 12.0011 0ZM9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8ZM12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3Z"></path>
                            </svg>                    
                            }</button>                    
                    </div>                                
                    <div className={bar}>
                        <div className={value} style={{width:`${passwordData.ismsgValidScore * 20}%`}}></div>
                    </div>
                    <div className={`${message}`}>
                        최소 숫자 1개 또는 특수 문자 1개를 반드시 포함해야 하며 총 6자(대소문자 구분) 이상이어야 합니다.
                    </div>
                </div>                
                <button className={`${nextButton} ${(passwordData.ismsgValidScore == 5) ? "" : "disabled"}`}  type = "button" disabled={!passwordData.isValid} onClick={onClickgoHome}>동의하고 진행하기</button>
            </div>
          </SignupLayout>
    )
}

export default CreatePassword;