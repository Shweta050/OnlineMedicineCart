import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../Components/Contact/CounterSlice";
import { catalogSlice } from "../Components/Catalog/CatalogSlice";
// export function configureStore() {
//     return createStore(counterReducer);
// }

export const store = configureStore({
reducer: {
        counter: counterSlice.reducer,
        catalog: catalogSlice.reducer,
    }
})



export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;