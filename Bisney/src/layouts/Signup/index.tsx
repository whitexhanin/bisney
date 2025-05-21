import React, { ReactNode } from 'react';
import { logo, img , container} from './styles.css';

type Props = {
    children: ReactNode;
  };


const SignupLayout: React.FC<Props>= ({children}) => {
    return (        
            <div className={container}>
                <h2 className={logo}>
                    <img className={img} src={`/logo/original.png`} alt="Disney+" />
                </h2>                
                <div>                     
                    {children}                
                </div>                
            </div>  
          
    )
}

export default SignupLayout;