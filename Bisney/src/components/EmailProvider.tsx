// import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

import { createContext, useState } from "react";

// // Context 생성
// interface EmailContextType {
//     email: string;
//     setEmail: Dispatch<SetStateAction<string>>;
// }

// // Context 생성 (기본값 제공)
// const EmailContext = createContext<EmailContextType>({
//     email: 'hh',
//     setEmail: () => {} // 타입 일치화를 위해 빈 함수 제공
// });

// // Provider 컴포넌트
// const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [email, setEmail] = useState('');
// console.log(email);
//     return (
//         <EmailContext.Provider value={{ email, setEmail }}>
//             {children}
//         </EmailContext.Provider>
//     );
// };

// // Context를 사용하여 데이터를 가져오는 Custom Hook
// const useEmailContext = () => useContext(EmailContext);
// console.log(useEmailContext)
// export { EmailProvider, useEmailContext };

// const CounterContext = createContext();

// function CounterProvider({ children }) {

//     const counterState = useState('defaultemail');

//   return <CounterContext.Provider value={counterState}>{children}</CounterContext.Provider>;
// }