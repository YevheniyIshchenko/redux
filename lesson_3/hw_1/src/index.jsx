import store from "./store.js";
import { addProduct, removeProduct } from "./cart.actions.js";
import { setLanguage } from "./language.actions.js";
import { setUser, removeUser } from "./user.actions.js";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct({ id: 1, name: "milk" }));
store.dispatch(addProduct({ id: 2, name: "meat" }));
store.dispatch(addProduct({ id: 3, name: "eggs" }));
store.dispatch(removeProduct({ id: 2 }));
store.dispatch(setUser({ name: "Dima" }));
store.dispatch(setUser({ name: "Masha" }));
store.dispatch(setUser({ name: "Oleg" }));

store.dispatch(setLanguage("nw"));
