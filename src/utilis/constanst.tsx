import { AdminRouter, AppRouter,HelloRouter } from "../pages/router"

export const App =[
    {
        subdomain:"www",
        app:AppRouter,
        main:true,
    },
    {
        subdomain:"admin",
        app:AdminRouter,
        main:false,
    },
    {
        subdomain:"hello",
        app:HelloRouter,
        main:false,
    },
]