import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../Components/Contact/CounterSlice";
// export function configureStore() {
//     return createStore(counterReducer);
// }

export const store = configureStore({
reducer: {
        counter: counterSlice.reducer
    }
})



export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;