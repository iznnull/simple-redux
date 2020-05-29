import { combinerReducers } from "redux";
import search from "./searchReducer"

const rootReducers = combinerReducers({
    search
});

export default rootReducers;