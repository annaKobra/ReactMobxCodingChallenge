import UserModel from '../models/User.model';
import UserService from '../services/User.service';
import { action, makeObservable, observable } from 'mobx';

class CurrentUserStore {
  @observable
  currentUser: UserModel = new UserModel('', 0);

  private userService: UserService;

  constructor() {
    makeObservable(this);
    this.userService = new UserService();
  }

  @action
  async getUser() {
    try {
      const user = await this.userService.getUser();
      this.currentUser = new UserModel(user.name.first, user.registered.age);
    } catch(err) {
      console.error(err.message);
    }
  }

  @action
  updateUserName(name: string) {
    this.currentUser = new UserModel(name, this.currentUser.age);
  }

  @action
  updateUserAge(age: number) {
    this.currentUser = new UserModel(this.currentUser.name, age);
  }
  
}

const store = new CurrentUserStore();
export default store;
