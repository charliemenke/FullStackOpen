import axios from 'axios'
const base_url = 'https://dry-wildwood-50478.herokuapp.com/api/persons'

const getAll = () => {
    const req = axios.get(base_url)
    return req.then(resp => resp.data)
}

const newContact = (newObj) => {
    const req = axios.post(base_url, newObj)
    return req.then(resp => resp.data)
}

const updateContact = (id, newObj) => {
    const req = axios.put(`${base_url}/${id}`,newObj)
    return req.then(resp => resp.data)
}

const deleteContact = (id) => {
    const req = axios.delete(`${base_url}/${id}`)
    return req.then(resp => resp.data)
}

export default { getAll, newContact, updateContact, deleteContact }