import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'

const store=createStore(
    reducer,
    // 判断有插件(Redux Dev Tools)，有的话就调用
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware，异步操作需要获取数据的时候要用到thunk，这时候要改造creatStore因为它只能两个参数
    //需要写增强函数来实现applyMiddleware和devtools共存
    )
export default store;