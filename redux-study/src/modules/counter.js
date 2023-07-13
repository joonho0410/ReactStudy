//Redux MOdule -> Action Type, Action fun, reducer
//Action Type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//Action func
//export 키워드를 이용해서 다른 파일에서도 이 함수를 사용할수 있게함.
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

//모듈의 초기화
const initialState = {
    number: 0,
};

function counter(state = initialState, action) {
    switch (action.type){
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter;