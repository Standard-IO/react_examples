import React, { useEffect } from 'react';
import  { useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = (props) => {

    const { users, getUsers } = useContext(UserContext);
    
    useEffect(() => {
        getUsers();

    }, [])

    return(
        <div className="list-group h-100">
            {
                users.map( user => {
                    return(
                    <a className="list-group-item list-group-item-action " href="#!" key={user.id}>
                        <img className="rounded" width="70" src={user.avatar} alt="userimage" />
                        <p>
                            {`${user.first_name} ${user.last_name}`}    
                        </p>
                    </a>
                    )
                })
            }
        </div>
    )
}

export default UserList;