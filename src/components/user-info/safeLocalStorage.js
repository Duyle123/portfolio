const safeLocalStorage = {
  getItem(key) {
    if (typeof window !== "undefined" && window.localStorage) {
      return window.localStorage.getItem(key);
    }
    return null;
  },
  setItem(key, value) {
    if (typeof window !== "undefined" && window.localStorage) {
      return window.localStorage.setItem(key, value);
    }
  },
  removeItem(key) {
    if (typeof window !== "undefined" && window.localStorage) {
      return window.localStorage.removeItem(key);
    }
  }
};

export default safeLocalStorage;