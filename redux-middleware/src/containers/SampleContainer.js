import React from "react";
import { connect } from 'react-redux';
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;
//Module 의 state 와, Action 함수들을 받아온다.
const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    //ComponenetDidMount 컴포넌트가 새로 생겼을 때, getPost 와 getUser가 수정되었을 때 UseEffect
    useEffect(() => {
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]);
    
    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({ sample }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: sample.loading.GET_POST,
        loadingUsers: sample.loading.GET_USERS
    }),
    {
        getPost,
        getUsers
    },
)(SampleContainer)