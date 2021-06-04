import React, { useEffect } from 'react';
import store from '../stores/CurrentUser.store';
import { observer } from 'mobx-react';

const EditUser = () => {
    useEffect(() => {
        const fetchData = async () => {
            await store.getUser();
        }
        fetchData();

    }, [])

    const loadData = () => {
        store.load('https://randomuser.me/api');
    }

    return (
        <div>
            <button onClick={loadData}>Load</button>
            <button>Clear</button>
            <h1>Edit user Page</h1>
            <label htmlFor="name">Name: </label>
            <input type="text" 
                   name="name"
                   value={store.currentUser.name}
                   onChange={e => store.updateUserName(e.target.value)}
                 /><br /><br />

            <label htmlFor="age">Age: </label>
            <input type="text" 
                   name="age"
                   value={store.currentUser.age}
                   onChange={e => store.updateUserAge(+e.target.value.replace(/\D/g, ""))}
                    />
        </div>
    );
}

export default observer(EditUser);