import UserModel from '../models/User.model';
import UserService from '../services/User.service';
import { action, computed, makeObservable, observable, reaction, runInAction } from 'mobx';
import axios from 'axios';

class CurrentUserStore {
  @observable
  currentUser: UserModel = new UserModel('', 0);

  private userService: UserService;

  constructor() {
    makeObservable(this);
    this.userService = new UserService();

    reaction(
      () => this.currentUser.name,
      () => this.currentUser.name = this.modifyUserName
    )
  }
  
  // Handle localstorge and prevent refresh
  @action
  private loadFromLocalStorage = () => {
    this.currentUser = JSON.parse(window.localStorage.getItem(CurrentUserStore.name) || '{}');
  }

  @action
  private saveToLocalStorage = () => {
    window.localStorage.setItem(
      CurrentUserStore.name,
      JSON.stringify(this.currentUser)
    )
  }

  @action
  async getUser() {
    try {
      const user = await this.userService.getUser();
      
      if(!localStorage.getItem(CurrentUserStore.name)) {
        this.currentUser = new UserModel(user.name.first, user.registered.age);
        this.saveToLocalStorage();
      } else {
        this.loadFromLocalStorage();
      }
    } catch(err) {
      console.error(err.message);
    }
  }

  @action
  updateUserName(name: string) {
    this.currentUser = new UserModel(name, this.currentUser.age);
    this.saveToLocalStorage();
  }

  @action
  updateUserAge(age: number) {
    this.currentUser = new UserModel(this.currentUser.name, age);
    this.saveToLocalStorage();
  }

  @action 
  async load(url: string) {
    try {
      const response = await axios.get(url);
      const user = response.data.results[0];

      runInAction(() => {
        this.currentUser = new UserModel(user.name.first, user.registered.age);
      })

      this.saveToLocalStorage();
    } catch(err) {
      console.error(err.message);
    }
  }

  @action
  clearData() {
    localStorage.removeItem(CurrentUserStore.name);
    localStorage.clear();
    this.currentUser = new UserModel('', 0);
  }

  @computed
  get modifyUserName() {
    let newName = this.currentUser.name;
    newName = newName.charAt(0).toUpperCase() + newName.substring(1).toLowerCase();
    return newName.slice(0, 10);
  }

}

const store = new CurrentUserStore();
export default store;
