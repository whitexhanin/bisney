
import { Nav } from "@/components/Nav"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const queryClient = new QueryClient();

const AfterLayout: React.FC<Props> = ({children}) => {    

    return (
        <>  
            {children}
            <Nav/>
        </>
    )
}

export default AfterLayout;