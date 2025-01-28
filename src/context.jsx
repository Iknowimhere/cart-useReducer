import {
  useReducer,
  useEffect,
  useContext,
  createContext,
} from 'react';
import cartItems from './data';
import { reducer } from './reducer';
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING } from "./actions";
import { total } from './utils';

const initialState = {
  loading: false,
  cart: new Map(cartItems.map(item => [item.id, item]))
}

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalCost, totalAmount } = total(state.cart)

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } })

  }

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } })
  }
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } })
  }
  return (
    <AppContext.Provider value={{ ...state, clearCart, remove, decrease, increase, totalCost, totalAmount }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
