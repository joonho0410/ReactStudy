import {createAction, handleActions} from 'redux-actions'
//Redux MOdule -> Action Type, Action fun, reducer
//Action Type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//Action func
//export 키워드를 이용해서 다른 파일에서도 이 함수를 사용할수 있게함.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//모듈의 초기화
const initialState = {
    number: 0,
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({number: state.number + 1}),
        [DECREASE]: (state, action) => ({number: state.number - 1}),
    },
    initialState,
);

export default counter;