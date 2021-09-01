import React, { Component } from 'react';



class UserLine extends Component{

    render(){
    const {user,onRemove,onToggle} = this.props;

    return(
        <div>
            <b
            style={{cursor:'pointer',
                    color: user.active? 'green' : 'black'}}
            onClick={()=>onToggle(user.id)}
            >{user.username}</b> 
            <span>({user.email})</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </div>
        )
    }
}

class UserList extends Component {
    render() {
        const {users,onRemove,onToggle}=this.props;
        return (
            <div>
                {users.map( u => (
                    <UserLine 
                        user={u} 
                        key={u.id} 
                        onRemove={onRemove}
                        onToggle={onToggle}
                        />
                ))}              
            </div>
        );
    }
}

export default UserList;