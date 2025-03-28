import { fetchPostGeneral } from '../fetch'

export const getDataSheet = (data) => {
    return fetchPostGeneral({
        dataSend: data, 
        urlEndPoint: `/api/v1/sheets/get`
    })
}

export const updateDataProcessTask = (data,sheet='updateProcess') => {
    return fetchPostGeneral({
        dataSend: data, 
        urlEndPoint: `/api/v1/sheets/${sheet}`
    })
}

export const generateDoc = (data) => {
    return fetchPostGeneral({
        dataSend: data, 
        urlEndPoint: `/execute`,
        path: 'http://34.75.28.50/server-pdf'
    })
}