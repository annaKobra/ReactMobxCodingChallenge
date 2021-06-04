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
        <div className="container">
            <h1 style={{marginBottom: 10}}>Edit user Page</h1>
            <button className="btn" onClick={loadData}>Load</button>
            <button className="btn" onClick={() => store.clearData()}>Clear</button>
            <div className="input-items">
                <label className="input-lable" htmlFor="name">Name: </label>
                <input className="input-item" type="text" 
                    name="name"
                    value={store.currentUser.name}
                    onChange={e => store.updateUserName(e.target.value)}
                    />

                <label className="input-lable" htmlFor="age">Age: </label>
                <input className="input-item" type="text" 
                    name="age"
                    value={store.currentUser.age}
                    onChange={e => store.updateUserAge(+e.target.value.replace(/\D/g, ""))}
                        />

            </div>
        </div>
    );
}

export default observer(EditUser);