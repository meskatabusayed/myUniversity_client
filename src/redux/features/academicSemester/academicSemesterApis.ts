import { baseApi } from "../../api/baseApi";

const academicSemester = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        getAllSemesters : builder.query({
            query : (userInfo) => ({
                url : '/academic-semesters',
                method : 'GET',
                body : userInfo,
            })
        })
    })

});

export const {useGetAllSemestersQuery} = academicSemester;