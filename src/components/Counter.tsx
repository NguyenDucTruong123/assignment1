import { decrement, increase, increment } from "@/slices/Counter";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
    const { count } = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
    // dispatch nhận giá trị là 1 plain object : { key: value }
    const payLoad = {
        a: 12,
        b: 55
    }
    return (
        <div>
            Counter {count}
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
            <button onClick={() => dispatch(increase(payLoad))}>DECREMENT</button>
        </div>
    );
};

export default Counter;
