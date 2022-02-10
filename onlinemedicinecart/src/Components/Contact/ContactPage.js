// import { Button,Typography,ButtonGroup } from "@material-ui/core";
// import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch, useSelector } from "react-redux";
// import { useAppDispatch,useAppSelector } from "../../Store/ConfigureStore";
// import { decrement,increment } from "./CounterSlice";

// export default function ContactPage() {
//     const dispatch = useDispatch();
//     const { data, title } = useSelector(state => state.counter);

//     return (
//         <>
//         {/* {console.log(configureStore().getState())} */}
//             <Typography variant='h2'>
//                 {title}
//             </Typography>
//             <Typography variant='h5'>
//                 The data is: {data}
//             </Typography>
//             <ButtonGroup>

//                 <Button onClick={() => dispatch(decrement(1))} variant='contained' color='error'>Decrement</Button>
//                 <Button onClick={() => dispatch(increment(1))} variant='contained' color='primary'>Increment</Button>
//                 <Button onClick={() => dispatch(increment(5))} variant='contained' color='secondary'>Increment by 5</Button>
//             </ButtonGroup>
//         </>

//     )
// }