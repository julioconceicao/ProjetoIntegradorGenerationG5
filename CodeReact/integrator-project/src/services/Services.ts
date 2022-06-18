import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://planeta-solidario-gen.herokuapp.com'
})

export const login = async(url: any, _data: any, setToken: any, setEmail: any, setType: any) => {
    const result = await api.post(url, _data)
    setEmail(result.data.email)
    setToken('Bearer ' + result.data.token)
    setType(result.data.type)
}

export const registerUser = async(url: any, _data: any, setData: any) => {
    const result = await api.post(url, _data)
    setData(result.data)  
}

export const search = async(url: any, setData: any, header: any) => { 
    const result = await api.get(url, header)
    setData(result.data)
}

export const searchId = async(url: any, setDada: any, header: any) => { 
    const result = await api.get(url, header)
    setDada(result.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}

export const deleteId = async(url: any, header: any) => { 
    await api.delete(url, header)
}

export const searchorder = async(url: any, setData: any, header: any) => { 
    const result = await api.get(url, header)
    setData(result.data)
}