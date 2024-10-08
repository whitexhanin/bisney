import { Link } from 'react-router-dom';
import { logo, img } from './styles.css';
import { ButtonHTMLAttributes, ChangeEventHandler,  MouseEventHandler, useCallback, useEffect, useState } from 'react';
import Checkbox from '@/components/Checkbox';

const CHECKBOX_ALL_LENGTH = 3;

const SignUp = () => {
  const [formData, setFormData] = useState({
    now: 1,
    email: '',
    password: '',
    checkPassword: '',
    checkbox: false,
    service: false,
    marketing: false,
    step1checkarr: [] as string[],
    step1checkall: false,    
    isCheckedAll: false,
    showPassword : false,
    isValid : true,
    isValidEmail : false,
    step1 : true,
  });  

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const newEmail = e.target.value;
    setFormData((prev) => ({
       ...prev, email: newEmail ,
       isValidEmail : validateEmail(newEmail)
      }));
  }, []);

  const onChangeIscheckbox: ChangeEventHandler<HTMLInputElement> = useCallback((data) => {
    const isChecked = data.target.checked;
    const isId = data.target.id;

    setFormData((prev) => {
      const updatedCheckArr = isChecked
        ? [...prev.step1checkarr, isId]
        : prev.step1checkarr.filter((p) => p !== isId);

      return {
        ...prev,
        step1checkarr: updatedCheckArr,        
        isCheckedAll: updatedCheckArr.length === CHECKBOX_ALL_LENGTH,
      };
    });
  }, []);

  const onChangeCheckboxAll: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const checkboxs = document.querySelectorAll("input[name=signupstep1]");
    const isChecked = e.target.checked;

    setFormData((prev) => {
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


  const onClickShowPassword: MouseEventHandler<HTMLButtonElement>  = useCallback((e) => {
    setFormData((prev)=>{
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

  const validateEmail = (email: string) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }


  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData((prev)=>{
        return {
            ...prev,
            password : newPassword,
            isValid :validatePassword(newPassword)

        }
    })    
  },[]);

  const onClickStep1: React.MouseEventHandler<HTMLButtonElement> = useCallback((e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setFormData((prev)=>{
      return {
        ...prev,        
        step1 : !prev.step1 ,
        now : prev.now + 1     
      }
    })
    
  },[]);  

  return (
    <>
      <h2 className={logo}>
        <img className={img} src={`public/logo/original.png`} alt="Disney+" />
      </h2>
      <div>
        <div className="locate">
          <span className="now">{formData.now}</span>
          <span>/</span>
          <span>2</span>
          <span>단계</span>
        </div>        
          <form action="onSubmit">
            {formData.step1 && 
            <div className="step1">
              <p className="title">이메일을 입력하세요</p>
              <input
                type="email"
                className="signupinput"
                value={formData.email}
                placeholder="이메일"
                onChange={onChangeEmail}
              />
              <div>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={formData.isCheckedAll}
                    onChange={onChangeCheckboxAll}
                  />
                  전체 동의 선택
                </label>
              </div>
              <Checkbox name="signupstep1" id="signup-ck1" sendDataToParent={onChangeIscheckbox}>
                디즈니+에 관한 최신 소식, 특별 혜택 및 기타 정보를 받아 보겠습니다.
              </Checkbox>
              <Checkbox name="signupstep1" id="signup-ck2" sendDataToParent={onChangeIscheckbox}>
                본인은 만 19세 이상이며
                <button className="popupbutton">디즈니+ 이용약관</button>
                에 동의 합니다.
              </Checkbox>
              <Checkbox name="signupstep1" id="signup-ck3" sendDataToParent={onChangeIscheckbox}>
                디즈니+의
                <button className="popupbutton">개인정보 수집 및 이용</button>
                에 동의 합니다.
              </Checkbox>
              <div className="box">
                <div className="txt">
                  디즈니는 위의 사용자 동의에 따라 정보를 이용 할 수 있습니다.
                </div>
                <button  type = "button" className="nextbutton" onClick = {onClickStep1} disabled={!(formData.isCheckedAll && formData.isValidEmail)}>동의하고 진행하기</button>
              </div>
            </div>
          }
          {!formData.step1 && 
          <div className="step2">
            <p className="title">비밀번호를 생성하세요</p>
            <div className="password">
                <input type={formData.showPassword?'text' : "password"} name="" id="" value={formData.password} onChange={onChangePassword}/>
                <button type = "button" className="showpassword" onClick={onClickShowPassword}>{formData.showPassword?'숨기기' : '보이기'}</button>
            </div>            
            <div className={`message ${!formData.isValid ? "red" : ""}`}>
                최소 숫자 1개 또는 특수 문자 1개를 반드시 포함해야 하며 총 6자(대소문자 구분) 이상이어야 합니다.
            </div>
            <div className="myemail">
                <span className="emailtit">로그인에 사용할 이메일</span>
                <span className="emailadd">{formData.email}</span>
            </div>
            <button className="nextbutton"  type = "button" disabled={!formData.isValid}>회원 가입</button>
          </div>
          }
        </form>
      </div>
    </>
  );
};

export default SignUp;
