import  React, {FC} from "react"
import { Route, Routes } from "react-router-dom"

import Home from '../Home/hello'
import AdminHome from "../Home/AdminHome"
import AppHome from "../Home/AppHome"
export const AppRouter:FC =()=>{
    return(
        <Routes>
            <Route path="/"element={<AppHome/>}/>
        </Routes>
    )
}
export const AdminRouter:FC =()=>{
    return(
        <Routes>
            <Route path="/"element={<AdminHome/>}/>
        </Routes>
    )
}
export const HelloRouter:FC =()=>{
    return(
        <Routes>
            <Route path="/"element={<Home/>}/>
        </Routes>
    )
}