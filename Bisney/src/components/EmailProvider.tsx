import React, { createContext, useState, useContext } from 'react';

interface EmailContextType {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const EmailProvider = ({ children }) => {
    const [email, setEmail] = useState('');

    return (
        <EmailContext.Provider value={{ email, setEmail }}>
            {children}
        </EmailContext.Provider>
    );
};

export const useEmail = () => {
  
  const context = useContext(EmailContext);

    if (!context) {
        throw new Error('useEmail must be used within an EmailProvider');
    }
    return context;
};