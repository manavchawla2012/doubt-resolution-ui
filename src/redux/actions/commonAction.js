import {LOADER} from "../type/commonType";

export const setLoader = (state=false) => {
    return dispatch => {
        dispatch({
            type: LOADER,
            loader: state
        })
    }
}

