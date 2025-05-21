import { useNavigate } from "react-router-dom";

export const Back = () => {
    const navigate = useNavigate();

    const handlerBack = ()=> {        
        navigate(-1)
    }

    return (
        <button onClick={handlerBack} style={{width:'50px',height:'50px',background:'url(/public/icon/back.png)',backgroundSize:'50px 50px'}}>            
        </button>
    )
}