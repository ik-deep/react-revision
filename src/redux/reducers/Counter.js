import * as Actions from "../ActionTypes";

const Initial = {
    counter: 0,
}
const Reducer = (state=Initial, action)=>{
 
    switch (action.type) {
        case Actions.INC:
            return {
               ...state,
                counter: state.counter + 1
            }
        case Actions.DEC:
            return {
               ...state,
                counter: state.counter - 1
            }
        case Actions.ADD_BY_10:
            return {
               ...state,
                counter: state.counter + 10
            }
        case Actions.ADD_BY_INPUT:
            return {
               ...state,
                counter: state.counter + parseInt(action.payload,10)
            }
        default:
            return state;
    }
}


export default Reducer;