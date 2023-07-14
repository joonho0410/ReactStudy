// Container 는 말 그대로 합치는 역할을 한다.
// Counter 컴포넌트 객체와, 모듈을 합침.
// Connect로 연결을 해주고, module에서 생성한 액션생성 함수를 기반으로 만든다.

import React from "react";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    return(
        <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync}></Counter> 
    );
};

export default connect(
    state => ({
        number: state.counter,
    }),
    {
        increaseAsync,
        decreaseAsync
    }, 
)(CounterContainer);