import { Outlet } from "react-router-dom";

export default function Product () {
    return (
        <>
        Products
        <div>
            <Outlet/>
        </div>
        </>
    )
}