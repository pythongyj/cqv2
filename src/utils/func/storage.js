import qs from "qs";

export const removeStorage = (name) => {
  window.localStorage.removeItem(name);
};

export const addStorage = (name, value) => {
  if (typeof value === "object") {
    value = qs.stringify(value);
  }

  window.localStorage.setItem(name, value);
};

export const getStorage = (name) => {
  return qs.parse(window.localStorage.getItem(name));
};

export const clearStorage = () => {
  return window.localStorage.clear();
};

export default {
  removeStorage,
  addStorage,
  getStorage,
  clearStorage,
};
