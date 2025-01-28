import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING } from "./actions";

export const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() }
    }
    if (action.type === REMOVE) {
        let newCart = new Map(state.cart);
        let itemId = action.payload.id;

        newCart.delete(itemId);
        return { ...state, cart: newCart };
    }
    if (action.type === INCREASE) {
        let newCart = new Map(state.cart);
        let itemId = action.payload.id;
        const item = newCart.get(itemId);
        const newItem = { ...item, amount: item.amount + 1 };
        newCart.set(itemId, newItem);
        return { ...state, cart: newCart };
    }
    if (action.type === DECREASE) {
        let newCart = new Map(state.cart);
        let itemId = action.payload.id;
        const item = newCart.get(itemId);
        if (item.amount <= 1) {
            newCart.delete(itemId)
            return { ...state, cart: newCart }
        }
        const newItem = { ...item, amount: item.amount - 1 };
        newCart.set(itemId, newItem);
        return { ...state, cart: newCart };
    }
    throw new Error(`unknown action type ${action.type}`);
}