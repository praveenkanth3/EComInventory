import {createStore} from "redux"
import arithreducer from "../reducer/reducer";
const store = createStore(arithreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;