import React, { useCallback } from "react";
import { useSelector,useDispatch } from "react-redux";
import useAction from "../lib/useActions";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = () => {
    const { input, todos } = useSelector(({todos}) =>({
        input: todos.input,
        todos: todos.todos
    }));
    const [onChangeInput, onInsert, onToggle, onRemove] = useAction(
        [changeInput, insert, toggle, remove],[]
    )

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default TodosContainer;
