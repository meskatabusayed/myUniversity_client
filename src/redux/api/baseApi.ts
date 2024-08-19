import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl : 'http://localhost:5000/api/v1',
    credentials : 'include',
    prepareHeaders : (headers , {getState}) => {
        const token = (getState() as RootState).auth.token;
        if(token){
            headers.set('authorization' ,`${token}`)
        }

        return headers;

    }

});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseQueryWithRefreshToken = async (args : any , api : any , extraOptions : any ) => {
    const result =await baseQuery(args , api , extraOptions);
    if(result.error?.status === 401){
        //sending refresh
        console.log("sending refresh token");

        const res =await fetch('http://localhost:5000/api/v1/auth/refresh-token' , {
            method : 'POST',
            credentials : 'include'
        })

        const data = res.json()

        console.log(data);

    }
    return result;
}

export const baseApi = createApi({
    reducerPath : "baseApi",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    baseQuery : baseQueryWithRefreshToken as any,
    endpoints : () =>({}),
    
})

