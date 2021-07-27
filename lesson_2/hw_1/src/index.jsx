import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

console.log(store.getState());
store.dispatch(addUser({ id: 1, name: "John" }));
store.dispatch(addUser({ id: 2, name: "Alex" }));
store.dispatch(addUser({ id: 3, name: "Dima" }));
store.dispatch(addUser({ id: 4, name: "Masha" }));
console.log(store.getState());

console.log(store.getState());
store.dispatch(deleteUser(1));
store.dispatch(deleteUser(3));

console.log(store.getState());
