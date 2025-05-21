import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/layouts/App'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { EmailProvider } from './components/EmailProvider'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, }, },
});
  

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser') 

  return worker.start()
}

enableMocking().then(() => {  
  createRoot(document.getElementById('root')!).render(
  
            <BrowserRouter>
              <EmailProvider>
                <QueryClientProvider client={queryClient}>             
                  <App />     
                </QueryClientProvider>
              </EmailProvider>
            </BrowserRouter>      
  ,
  )
})
