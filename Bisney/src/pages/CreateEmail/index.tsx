import { Link } from 'react-router-dom';
import { boxcontainer , title , inputContainer , inputStyle ,labelStyle ,activeLabelStyle , hasLabelStyle , nextButton , checkboxlist , txt} from './styles.css';
import { ButtonHTMLAttributes, ChangeEventHandler,  MouseEventHandler, useCallback, useContext, useEffect, useState ,Dispatch , SetStateAction ,createContext} from 'react';
import Checkbox from '@/components/Checkbox';
import SignupLayout, { CounterContext , useCounterState } from '@/layouts/Signup';
// import { useEmailContext } from '@/components/EmailProvider';

// Context 생성
// interface EmailContextType {
//     email: string;
//     setEmail: Dispatch<SetStateAction<string>>;
// }

// Context 생성 (기본값 제공)
// const EmailContext = createContext<EmailContextType>({
//     email: email,
//     setEmail: () => {} // 타입 일치화를 위해 빈 함수 제공
// });

// const CounterContext = createContext();

const CHECKBOX_ALL_LENGTH = 3;

const CreateEmail = () => {
    const [counter] = useCounterState();


    // console.dir(counterState);
    // const [email, setEmail] = useState('');
    
    // const EmailContext = createContext<EmailContextType>({
    //     email: email,
    //     setEmail: () => {} // 타입 일치화를 위해 빈 함수 제공
    // });

    const [emailData , setEmailData] = useState({        
        isValidEmail : false,
        step1checkarr: [] as string[],
        step1checkall: false,        
        isCheckedAll: false, 
        isHasEmail : false,   
    });

    // const { email, setEmail } = useEmailContext();    

    const onChangeEmail: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        const newEmail = e.target.value;
        // setEmail(newEmail);        
        setEmailData((prev) => ({
           ...prev, 
           isValidEmail : validateEmail(newEmail),
           isHasEmail : newEmail !== '',
          }));
        //   console.log(email);
      }, []);

    const validateEmail = (email: string) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }   

    const onChangeCheckboxAll: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        const checkboxs = document.querySelectorAll("input[name=signupstep1]");
        const isChecked = e.target.checked;

        setEmailData((prev) => {
            const updatedCheckArr = isChecked
            ? Array.from(checkboxs).map((c) => (c as HTMLInputElement).id)
            : [];

            checkboxs.forEach((c) => {
            (c as HTMLInputElement).checked = isChecked;
            });

            return {
            ...prev,
            step1checkarr: updatedCheckArr,
            isCheckedAll: isChecked,
            };
        });
    }, []);

    const onChangeIscheckbox: ChangeEventHandler<HTMLInputElement> = useCallback((data) => {
        const isChecked = data.target.checked;
        const isId = data.target.id;
    
        setEmailData((prev) => {
          const updatedCheckArr = isChecked
            ? [...prev.step1checkarr, isId]
            : prev.step1checkarr.filter((p) => p !== isId);
            console.log(updatedCheckArr.length , CHECKBOX_ALL_LENGTH);
          return {
            ...prev,
            step1checkarr: updatedCheckArr,        
            isCheckedAll: updatedCheckArr.length === CHECKBOX_ALL_LENGTH,            
          };
        });
      }, []);

    //   const handleChange = (e) => {
    //     setEmail(e.target.value);
    //   }
    

    return (        
        <SignupLayout>
            <div className={boxcontainer}>           
                <p className={title}>이메일을 입력하세요</p>
                
                <div className={inputContainer}>   
                        <input
                            type="email"
                            id="email"
                            className={inputStyle}
                            // value={email || ''}                        
                            onChange={onChangeEmail}
                        />
                        {/* {children} */}
                
                    <label htmlFor="email" className={`${labelStyle} ${activeLabelStyle} ${emailData.isHasEmail ? hasLabelStyle : ''}`}>이메일</label>
                </div>         
                <div className={checkboxlist}>               
                    <Checkbox name="" id="signup-ckall" checked={emailData.isCheckedAll} sendDataToParent={onChangeCheckboxAll}>
                    전체 동의 선택
                    </Checkbox>
                    <Checkbox name="signupstep1" id="signup-ck1" sendDataToParent={onChangeIscheckbox}>
                        디즈니+에 관한 최신 소식, 특별 혜택 및 기타 정보를 받아 보겠습니다.
                    </Checkbox>
                    <Checkbox name="signupstep1" id="signup-ck2" sendDataToParent={onChangeIscheckbox}>
                        본인은 만 19세 이상이며 <button className="popupbutton">디즈니+ 이용약관</button> 에 동의 합니다.
                    </Checkbox>
                    <Checkbox name="signupstep1" id="signup-ck3" sendDataToParent={onChangeIscheckbox}>
                        디즈니+의 <button className="popupbutton">개인정보 수집 및 이용</button> 에 동의 합니다.
                    </Checkbox>
                </div>                
                <div className="box">
                    <div className={txt}>
                    디즈니는 위의 사용자 동의에 따라 정보를 이용 할 수 있습니다.
                    </div>
                    <Link to="/signup/create-password"  className={`${nextButton} ${!(emailData.isCheckedAll && emailData.isValidEmail) ? "disabled" : ""}`}>다음</Link>                
                </div>
                </div>
        </SignupLayout>        
    )
}

// const useEmailContext = () => useContext(EmailContext);
// const useEmailContext = () => useContext(EmailContext);
export default  CreateEmail ;

// const useEmailContext = () => useContext(EmailContext);
// console.log(useEmailContext)
// export { EmailProvider, useEmailContext };