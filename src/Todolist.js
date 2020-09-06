import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Input, Button, List,Typography } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import store from './store/index'
import {changeInputAction,addAction,deleteAction} from './store/actionCreators'
import {connect} from 'react-redux'

const stateToProps=(state)=>{
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}
const dispatchToProps=(dispatch)=>{
    return{
        changeInput(e){
            const action=changeInputAction(e.target.value);
            dispatch(action);
        },
        handleAdd(e){
            const action=addAction();
            dispatch(action);
        },
        handleDel(index){
            const action=deleteAction(index)
            dispatch(action);
        }
    }
}

const Todolist=(props)=>{
    let {inputValue ,changeInput,handleAdd,list,handleDel} = props;
        return (
            <div>
                <h2>redux组件</h2>
                <Input style={{ width: '250px' }} placeholder={'请输入新内容'} value={inputValue}  onChange={changeInput}></Input>
                <Button type='primary' onClick={handleAdd}>增加</Button>
                <div style={{ width: '300px',margin:'20px'}}>
                    <List bordered dataSource={list} header={<div>待办事项列表</div>}
                        renderItem={(item,i) => (
                            <List.Item index={i} onClick={()=>{handleDel(i)}}><Typography.Text mark>[#]</Typography.Text>{item}</List.Item>
                        )}>
                    </List>
                </div>
                {/* <Search placeholder="输入新的待办事项"  enterButton="Add" onSearch={value => console.log(value)}></Search> */}
            </div>
        )
    }

export default connect(stateToProps,dispatchToProps)(Todolist);