import axios from "axios"
import Cookies from 'js-cookie'
import { json } from "stream/consumers"

export const auth= {
    login: async (values: any) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`, values)
        const data:any = response.data
        console.log(data);
        if (data.token) {
            Cookies.set('auth',JSON.stringify({ token: data.token, userId: data.userId }), { expires: 1 })
        }
        return response
    },

    logout:()=>{
        Cookies.remove('token')
    },

    isAuthenticated: () => {
        return !!Cookies.get('token')
      }
}