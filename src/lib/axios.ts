import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// Cada vez que en ProjectAPI se utilice api("acá va la url"), ya toma el token y así evitamos repetir código en todas las funciones para la autorización
api.interceptors.request.use( config =>  {
    const token = localStorage.getItem("AUTH_TOKEN")

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api