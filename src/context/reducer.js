export const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  token: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_WISH_ITEM":
      let updatedWishlist;
      if (state.wishlist.findIndex((x) => x.id == action.product.id) < 0) {
        updatedWishlist = [...state.wishlist, action.product];
      } else {
        updatedWishlist = state.wishlist.filter(
          (item) => item.id !== action.product.id
        );
      }
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return { ...state, wishlist: updatedWishlist };

    case "ADD_CART_ITEM":
      let updatedCart;
      if (state.cart.findIndex((x) => x.id == action.product.id) < 0) {
        updatedCart = [...state.cart, action.product];
      } else {
        updatedCart = state.cart.filter(
          (item) => item.id !== action.product.id
        );
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};
