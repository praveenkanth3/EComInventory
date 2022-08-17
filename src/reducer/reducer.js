const initialState = {
    total:0
}
const arithreducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case "addition":
            return{
                 total : actions.payload, 
            }
        default:
            return state;
    }

}
export default arithreducer;