import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://planeta-solidario-gen.herokuapp.com'
})

export const login = async(url: any, _data: any, setData: any) => {
    const result = await api.post(url, _data)
    setData(result.data.token)
}

export const registerUser = async(url: any, _data: any, setData: any) => {
    const result = await api.post(url, _data)
    setData(result.data)  
}

export const busca = async(url: any, setDado: any, header: any) => { 
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const buscaId = async(url: any, setDado: any, header: any) => { 
    const resposta = await api.get(url, header)
    setDado(resposta.data)
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