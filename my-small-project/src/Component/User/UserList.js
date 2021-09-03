import React, { useEffect, Component } from 'react';

//함수형컴포넌트 기능 테스트 파일이므로, 나중에 다시 원본파일의 이름을 바꿔주어야한다.
//현재 파일은 복사본임.

function UserLine({user,onRemove,onToggle}){
    
    useEffect(()=>{
        console.log('user값이 설정됨');
        console.log(user);//렌더링하는 해당user를 찍음(마운트되는 게발유저)        

        return ()=>{
            console.log('user가 바뀌기 전');
            console.log(user)//삭제되는 해당 유저를 찍음
        };
    }, [user]);

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

// function UserLine({user,onRemove,onToggle}){
    
//     useEffect(()=>{
//         console.log(user);           
//     },[]);//두번째파라미터 deps에 빈배열을 넣으면 처음 렌더링될때만 함수가 실행되고, 상태변경/삭제시에는 함수가 실행되지 않는다.

//     return(
//         <div>
//         <b
//         style={{cursor:'pointer',
//                 color: user.active? 'green' : 'black'}}
//         onClick={()=>onToggle(user.id)}
//         >{user.username}</b> 
//         <span>({user.email})</span>
//         <button onClick={()=>onRemove(user.id)}>삭제</button>
//     </div>
//     )
// }


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