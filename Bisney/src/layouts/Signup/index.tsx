import React, { Dispatch, ReactNode , SetStateAction, createContext, useContext, useState} from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import { logo, img , container} from './styles.css';
// import { EmailProvider } from '@/components/EmailProvider';

type Props = {
    children: ReactNode;
  };
interface EmailContextType {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
}

// Context 생성 (기본값 제공)


export const CounterContext = createContext({});

function CounterProvider({ children } : {children : any}) {
    // const counterState = useState('defaultemail');
    const counterState = createContext<EmailContextType>({
        email: 'defaultemail',
        setEmail: () => {} // 타입 일치화를 위해 빈 함수 제공
    });
  return <CounterContext.Provider value={counterState}>{children}</CounterContext.Provider>;
}

export function useCounterState() {
    const value = useContext(CounterContext);
    if (value === undefined) {
      throw new Error('useCounterState should be used within CounterProvider');
    }
    return value;
}


const SignupLayout: React.FC<Props>= ({children}) => {
    return (
        <div className={container}>
            <h2 className={logo}>
                {/* <img className={img} src={`/logo/original.png`} alt="Disney+" /> */}
            </h2>
            <div>      
                <CounterProvider>                         
                    {children}                    
                </CounterProvider>
            </div>
        </div>        
    )
}

export default SignupLayout;