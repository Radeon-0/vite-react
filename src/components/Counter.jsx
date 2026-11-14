import {connect, useDispatch} from 'react-redux';
import {inc,dec,rnd} from '../actions.jsx';
import {useSelector} from "react-redux";

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron jumbotron-fluid">
            <h1>{counter} </h1>
            <button onClick={()=>dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={()=>dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={()=>dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        counter: state.value,
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     const {inc,dec,rnd}= bindActionCreators(actions, dispatch)
//     return {
//         inc,
//         dec,
//         rnd,
//     }
// }

//export default connect(mapStateToProps,actions)(Counter);

export default Counter;