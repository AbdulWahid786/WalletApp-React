import axios from 'axios'
import { GET_ERRORS, GET_WALLETS, DELETE_WALLET } from './types'

export const createWallet = (newWallet, history) => async dispatch => {
    await axios.post('http://localhost:8080/wallet', newWallet)
        .then((res) => {
            history.push('/dashboard')
        })
        .catch((err) => {
            dispatch({ type: GET_ERRORS, payload: err.response.data })
        })
}

export const getWallets = () => async dispatch => {
    await axios.get('http://localhost:8080/wallet')
        .then((res) => {
            
            dispatch({ type: GET_WALLETS, payload: res.data })
        })

}


export const deleteWallet = (id) => async dispatch => {
    await axios.delete(`http://localhost:8080/wallet/${id}`)
        .then((res) => {
            
            dispatch({ type: DELETE_WALLET, payload: id })
        })

}