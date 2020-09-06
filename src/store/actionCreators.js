import {CHANGE_INPUT,ADD,DELETE} from './actionType'

export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
})

export const addAction=()=>({
    type:ADD
})

export const deleteAction=(index)=>({
    type:DELETE,
    index
})