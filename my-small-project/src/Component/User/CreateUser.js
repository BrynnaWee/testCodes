import React, { Component } from 'react';

class CreateUser extends Component {
    render() {

        const { username, email, onChangeInput, onCreateUser, newNameInput } = this.props;

        return (
            <div>
                <input
                    name="username"
                    placeholder="계정명"
                    value={username}
                    onChange={onChangeInput}
                    ref={newNameInput}
                 />
                <input
                    name="userEmail"
                    placeholder="이메일"
                    value={email}
                    onChange={onChangeInput}
                />
                <button onClick={onCreateUser}>등록</button>
            </div>
        );
    }
}

export default CreateUser;