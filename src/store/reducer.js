import { Switch } from "antd";

const defaultState = {
    inputValue: '',
    list: ["把Redux学会，改造CommentApp", "试听各大课程，报名开始学习", "加油吧"]
};

export default (state = defaultState, action) => {
    console.log(state, action);
    // Switch(action.type){
    //     case "changeInput":console.log(11); break;
    // }
    if (action.type === "changeInput") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === "add") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    if (action.type === "delete") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}