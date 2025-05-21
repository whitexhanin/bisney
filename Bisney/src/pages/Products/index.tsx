import AfterLayout from "@/layouts/AfterLayout";
import { Outlet } from "react-router-dom";

export default function Products () {
    return (
        <AfterLayout>           
            <Outlet/>
        </AfterLayout>
    )
}