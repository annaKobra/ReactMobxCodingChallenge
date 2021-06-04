import React, { useEffect } from 'react';
import store from '../stores/CurrentUser.store';
import { observer } from 'mobx-react';

const EditUser = () => {
    useEffect(() => {
        const fetchData = async () => {
            await store.getUser();
            console.log(store.currentUser);
        }
        fetchData();

    }, [])

    return (
        <div>
            {store.currentUser.name}
            <h1>Edit user Page</h1>
            <label htmlFor="name">Name: </label>
            <input type="text" 
                   name="name"
                   value={store.currentUser.name}
                 /><br /><br />

            <label htmlFor="age">Age: </label>
            <input type="text" 
                   name="age"
                   value={store.currentUser.age} />
        </div>
    );
}

export default observer(EditUser);