import React, { Dispatch, ReactNode , SetStateAction, createContext, useContext, useMemo, useState} from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import { logo, img , container} from './styles.css';
import { CounterProvider } from '@/components/EmailProvider';

type Props = {
    children: ReactNode;
  };


const SignupLayout: React.FC<Props>= ({children}) => {
    return (
        
            <div className={container}>
                <h2 className={logo}>
                    {/* <img className={img} src={`/logo/original.png`} alt="Disney+" /> */}
                </h2>
                {/* <CounterProvider>  */}
                <div>      
                    {children}                    
                </div>
                {/* </CounterProvider>   */}
            </div>  
            
    )
}

export default SignupLayout;