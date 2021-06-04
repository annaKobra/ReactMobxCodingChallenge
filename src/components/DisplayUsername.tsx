import React from 'react';
import store from '../stores/CurrentUser.store';
import { observer } from 'mobx-react';

const DisplayUsername = () => (
    <>
     {store.currentUser.name.length ? 
        <h1>{store.currentUser.name}{store.currentUser.age}</h1>
        : ''
     }
    </>
);

export default observer(DisplayUsername);