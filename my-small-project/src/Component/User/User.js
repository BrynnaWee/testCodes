import React, { Component } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

class User extends Component {

    state = {

        users : [
          {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: false
          },
          {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
          },
          {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
          }
        ],
          input : {
            username : '',
            userEmail : ''
          }
        }


        nextId = this.state.users.length+1;
        newNameInput = React.createRef();
      
      
         onCreateUser = () => {
      
          const newUser = {
            id: this.nextId,
            username : this.state.input.username,
            email : this.state.input.userEmail,
            active:false
          }
      
          this.setState({
            ...this.state, 
            users: [...this.state.users, newUser],
            input : {
                ...this.state.input,
                username : '',
                userEmail : ''
            }
          }, //업데이트된 state값을 바로 조회하기 위해 콜백함수 사용
          ()=>console.log(this.state.users));
      
          this.nextId += 1;
          this.newNameInput.current.focus();
          
        }
      
         onChangeInput = e => {
          const {name, value} = e.target;
          this.setState({
            ...this.state,
            input:{
              ...this.state.input,
              [name]:value
            }
          })
        }
      
        onRemove = id => {
          const users = this.state.users.filter(u => u.id !== id);
          this.setState({...this.state, users});
        }
      
        onToggle = id => {
          const users = this.state.users.map(u => u.id === id ? {...u, active:!u.active} : u)
          this.setState({...this.state, users});
        }


    render() {

        const {username, userEmail} = this.state.input;


        return (
            <div>
                 <CreateUser
      username={username}
      email={userEmail}
      onChangeInput={this.onChangeInput}
      onCreateUser={this.onCreateUser}
      newNameInput={this.newNameInput}
    
    />

    <UserList 
      users={this.state.users}
      onRemove={this.onRemove}
      onToggle={this.onToggle}
      />
            </div>
        );
    }
}

export default User;