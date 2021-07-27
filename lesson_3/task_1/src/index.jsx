import store from "./store.js";
import { increment, decrement, reset } from "./counter.actions";
import { addUser, deleteUser, updateUser } from "./users.actions.js";

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(addUser({ id: 1, name: "John" }));
store.dispatch(addUser({ id: 2, name: "Alex" }));
store.dispatch(addUser({ id: 3, name: "Dima" }));
store.dispatch(addUser({ id: 4, name: "Masha" }));
console.log(store.getState());

console.log(store.getState());
store.dispatch(deleteUser(1));
store.dispatch(deleteUser(3));

store.dispatch(updateUser(4, { age: 25 }));

console.log(store.getState());
