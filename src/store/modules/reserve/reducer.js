export default function reducer(state = [], action){
    console.log(action)
    switch(action.type){
        case 'ADD_RESERVE':
        return[...state, action.trip];
        default:
            return state;
    }
}