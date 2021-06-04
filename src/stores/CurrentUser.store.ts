import UserModel from '../models/User.model';
import { makeObservable } from 'mobx';

class CurrentUserStore {
  currentUser: UserModel = new UserModel('', 0);

  constructor() {
    makeObservable(this);
  }
}

const store = new CurrentUserStore();
export default store;
