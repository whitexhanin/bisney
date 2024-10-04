import { Link } from 'react-router-dom';
import { logo ,img  } from './styles.css';
import { ChangeEventHandler, createContext, useCallback, useEffect, useState } from 'react';
import   Checkbox  from '@/components/Checkbox';
import { CheckboxGroup } from '@/components/CheckboxGroup';


const SomeContext = createContext();

const SignUp  = () => {
    const [now , setNow] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [checkPassword , setCheckPassword] = useState('');
    const [checkbox , setCheckbox] = useState(false);
    const [service , setService] = useState(false);
    const [marketing , setMarketing] = useState(false);
    // const [step1checkarr, setstep1checkarr] = useState<string[]>([]);
    const [step1checkall , setstep1checkall] = useState(false);    
    const [checkboxAlllength , _1] = useState(3);
    const [misMatch , setmisMatch] = useState(false);    
    const [isCheckedAll , setisCheckedAll] = useState(false);


    const onChangeEmail : ChangeEventHandler <HTMLInputElement> = useCallback((e)=>{
        setEmail(e.target.value);
    },[setEmail]);

    const onSubmit : any = (e : any) => {
        const res = fetch('api',{
            method : 'post',
        })        
    }

    const onChangeIscheckbox : ChangeEventHandler<HTMLInputElement> = useCallback((e ) => {
        
        if(e.target.checked == true){
            setstep1checkarr(prev  =>[...prev , e.target.id]);
        }else{
            console.log(e.target.id);
            setstep1checkarr((prev)=>prev.filter( (p) => p !== e.target.id))            
            // setisCheckedAll(false)
        }
        
    },[step1checkarr]);

    console.log(step1checkarr);

    useEffect(() => {

            if(checkboxAlllength == step1checkarr.length){
                setmisMatch(true);
                setisCheckedAll(true);
            }else {
                setmisMatch(false);
                setisCheckedAll(false);
            }
        },[step1checkarr]
    )

    const onChangeCheckboxAll : ChangeEventHandler<HTMLInputElement>  = useCallback((e)=>{

        let checkboxs  = document.querySelectorAll("input[name=signupstep1]");

        if(e.target.checked == true){
            setstep1checkarr([]);
            checkboxs.forEach((c)=>{
                const checkbox = c as HTMLInputElement;               
                checkbox.checked = true;

                setstep1checkarr((prev)=> [...prev , c.id])
            })
            
        }else {
            checkboxs.forEach((c)=>{
                const checkbox = c as HTMLInputElement;               
                checkbox.checked = false;
                setstep1checkarr([]);
            })
        }

    },[])

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
                    <SomeContext.Provider value={step1checkarr}>                    
                        <div className="step1">
                            <p className="title">이메일을 입력하세요</p>                        
                            <input type="email" className="signupinput" value={email} placeholder='이메일' onChange={onChangeEmail}/>
                            {/* <CheckboxGroup label="" values={} onChange={setColors}>
                                <Checkbox value={}>
                                    디즈니+에 관한 최신 소식, 특별 혜택 및 기타 정보를 받아 보겠습니다.
                                </Checkbox>
                            </CheckboxGroup> */}                        
                            <div>
                                <label htmlFor="">
                                    <input type="checkbox" name="" id="" checked = {isCheckedAll} onChange={onChangeCheckboxAll}/>
                                    전체 동의 선택
                                </label>
                            </div>
                            {/* <div>
                                <input type="checkbox" name="signupstep1" id="signup-ck1" onChange={onChangeIscheckbox} />
                                <label htmlFor="signup-ck1">디즈니+에 관한 최신 소식, 특별 혜택 및 기타 정보를 받아 보겠습니다.</label>
                            </div> */}
                            <Checkbox name="signupstep1" id="signup-ck1">
                                디즈니+에 관한 최신 소식, 특별 혜택 및 기타 정보를 받아 보겠습니다.
                            </Checkbox>
                            <Checkbox name="signupstep1" id="signup-ck2">
                                디즈니+에 관한 최신 소식, 특별 혜택 및 기타 정보를 받아 보겠습니다.
                            </Checkbox>
                            <Checkbox name="signupstep1" id="signup-ck3">
                                디즈니+에 관한 최신 소식, 특별 혜택 및 기타 정보를 받아 보겠습니다.
                            </Checkbox>
                            {/* <div>
                                <input type="checkbox" name="signupstep1" id="signup-ck2" onChange={onChangeIscheckbox}/>
                                <label htmlFor="signup-ck2">
                                    본인은 만 19세 이상이며 
                                    <button className="popupbutton">디즈니+ 이용약관</button>
                                    에 동의 합니다.
                                </label> 
                            </div>
                            <div>
                                <input type="checkbox" name="signupstep1" id="signup-ck3" onChange={onChangeIscheckbox}/>
                                <label htmlFor="signup-ck3">
                                    디즈니+의
                                    <button className="popupbutton">개인정보 수집 및 이용</button>
                                    에 동의 합니다.
                                </label>
                            </div> */}
                            <div className="box">
                                <div className="txt">
                                    디즈니는 위의 사용자 동의에 따라 정보를 이용 할 수 있습니다.
                                </div>
                                <button disabled={!misMatch}>동의하고 진행하기</button>
                            </div>
                        </div>
                    </SomeContext.Provider>
                </form>
            </div>

        
        </>
    )
}

export default SignUp;