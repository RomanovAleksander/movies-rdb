class LocalStorage {
  constructor() {
    if (LocalStorage.instance) {
      return LocalStorage.instance
    }
    LocalStorage.instance = this;
    return this;
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem(`${key}`));
  }

  setItem(key, value) {
    return localStorage.setItem(`${key}`, JSON.stringify(value));
  }
}

export default new LocalStorage();
