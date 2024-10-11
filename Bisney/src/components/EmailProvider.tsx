//Error 이메일 공유 해결하기

import React, { Dispatch, ReactNode , SetStateAction, createContext, useContext, useMemo, useState} from 'react';

interface EmailContextType {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
}



export const CounterContext = createContext<EmailContextType>({
    email:'defaultemail',
    setEmail:()=> {}
});

export function CounterProvider({ children } : {children : React.ReactNode}) {
    const [email , setEmail] = useState('');       
    // const value = () => ({ email, setEmail});
    // console.log(email);
    const value = useMemo(()=>{return [email , setEmail]},[email]);
    // console.log(value);
  return (<CounterContext.Provider value={{email , setEmail}}>{children}</CounterContext.Provider>);
}

export function useCounterState() {
    const value = useContext(CounterContext);
    // console.log(value);
    if (value === undefined) {
      throw new Error('useCounterState should be used within CounterProvider');
    }
    return value;
}
