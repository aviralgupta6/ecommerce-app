import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    )
);

export const selectCartAmount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalAmount, cartItem) => totalAmount + cartItem.quantity * cartItem.price,
    0
  )
);
