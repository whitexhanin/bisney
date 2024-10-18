import { Outlet } from "react-router-dom";

export default function Products () {
    return (
        <>
        Products
        <div>
            <div>리스트 가져올꺼야?</div>
            <Outlet/>
        </div>
        </>
    )
}