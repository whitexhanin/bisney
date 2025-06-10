import { Link, useParams, useSearchParams , useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { boxcontainer , title , inputContainer , inputStyle ,labelStyle ,activeLabelStyle , hasLabelStyle , nextButton , checkboxlist , txt} from './styles.css';
import { ButtonHTMLAttributes, ChangeEventHandler,  MouseEventHandler, useCallback, useContext, useEffect, useState ,Dispatch , SetStateAction ,createContext} from 'react';
import Checkbox from '@/components/Checkbox';
import SignupLayout from '@/layouts/Signup';
import useSWR from 'swr';
import { useEmail } from '@/components/EmailProvider';
import { mutate } from 'swr';


const CHECKBOX_ALL_LENGTH = 3;

const CreateEmail = () => {
  const location = useLocation();  
  const pathIsLogin = (location.pathname == '/login/create-email');
  const navigate = useNavigate();
  
  const {email , setEmail} = useEmail();
  const [localEmail, setLocalEmail] = useState(email);
  const [emailtext , setEmailtext] = useState('');
  const [emailData , setEmailData] = useState({        
      isValidEmail : false,
      step1checkarr: [] as string[],
      step1checkall: false,        
      isCheckedAll: false, 
      isHasEmail : false,   
  });
  const [error , setError] = useState<string | null>(null);

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {

      const newEmail = e.target.value;

      setEmailData((prev) => ({
          ...prev, 
          isValidEmail : validateEmail(newEmail),
          isHasEmail : newEmail !== '',
        }));
      
      setEmail(newEmail);
      
  }, [setEmail]);

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

  const handleKeyDown = (e : React.KeyboardEvent) => {
    if(e.key === 'Enter' && pathIsLogin && emailData.isValidEmail){      
      navigate('/login/create-password');      
    }
  }

  const checkUser = () => {
    //email 중복 체크
    fetch('/api/check-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
    })
    .then(res => res.json())
    .then(data => {
      if(data.exists){
        setError(data.type === 'email' ? '이미 사용중인 이메일입니다.' : '이미 사용중인 전화번호입니다.');
      }
    })
    .catch(error => {
      console.error('중복 체크 오류:', error);
    });
  }
  

    return (        
        <SignupLayout>
            <div className={boxcontainer}>           
                <p className={title}>이메일을 입력하세요</p>                
                <div className={inputContainer}>   
                        <input
                            type="email"
                            id="email"
                            className={inputStyle}
                            value={email}  
                            onChange={onChangeEmail}
                            onKeyDown={handleKeyDown}
                        />                
                    <label htmlFor="email" className={`${labelStyle} ${activeLabelStyle} ${emailData.isHasEmail ? hasLabelStyle : ''}`}>이메일</label>
                </div> 
                { !pathIsLogin && 
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
                }           
                <div className="box">
                  { !pathIsLogin && 
                      <div className={txt}>
                      디즈니는 위의 사용자 동의에 따라 정보를 이용 할 수 있습니다.
                      </div>
                  }
                    <Link to={
                      `${!pathIsLogin?  !(emailData.isCheckedAll && emailData.isValidEmail) ? "" : "/signup/create-password": !(emailData.isValidEmail) ? "" : "/login/create-password"}`
                      } 
                      className={`${nextButton} ${!pathIsLogin?  !(emailData.isCheckedAll && emailData.isValidEmail) ? "disabled" : "": !(emailData.isValidEmail) ? "disabled" : ""}`}
                    >
                    다음
                    </Link>                    

                </div>
                </div>
        </SignupLayout>        
    )
}

export default  CreateEmail 