const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  discounts: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1
          }
        ],
        totalPrice: state.totalPrice + action.payload.price,
        totalQuantity: state.totalQuantity + 1
      };
    case "REMOVE_FROM_CART": {
      const item = state.items.find(({ id }) => id === action.payload.itemId);
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== item.id),
        totalPrice: state.totalPrice - item.price * item.quantity,
        totalQuantity: state.totalQuantity - item.quantity
      };
    }

    case "UPDATE_QUANTITY": {
      const item = state.items.find(({ id }) => id === action.payload.itemId);
      if (action.payload.updateType === "INCREMENT") {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.itemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalPrice: state.totalPrice + item.price,
          totalQuantity: state.totalQuantity + 1
        };
      }
      if (action.payload.updateType === "DECREMENT") {
        if (item.quantity > 1) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.id === action.payload.itemId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            totalPrice: state.totalPrice - item.price,
            totalQuantity: state.totalQuantity - 1
          };
        } else {
          return {
            ...state,
            items: state.items.filter(({ id }) => id !== item.id),
            totalPrice: state.totalPrice - item.price * item.quantity,
            totalQuantity: state.totalQuantity - item.quantity
          };
        }
      }
      return;
    }

    case "ADD_DISCOUNT":
      const newDiscounts = [...state.discounts, action.payload.discount];
      const newTotalPriceWithDiscounts = calculateTotalPrice(
        state.items,
        newDiscounts,
        state.totalQuantity
      );
      return {
        ...state,
        discounts: newDiscounts,
        totalPrice: newTotalPriceWithDiscounts
      };
    case "APPLY_PROMOTION":
      const newPromotions = [...state.discounts, action.payload.promotion];
      const newTotalPriceWithPromotions = calculateTotalPrice(
        state.items,
        newPromotions,
        state.totalQuantity
      );
      return {
        ...state,
        discounts: newPromotions,
        totalPrice: newTotalPriceWithPromotions
      };

    case "REMOVE_DISCOUNT":
      const remainingDiscounts = state.discounts.filter(
        (discount) => discount.id !== action.payload.discountId
      );
      const newTotalPriceWithoutDiscounts = calculateTotalPrice(
        state.items,
        remainingDiscounts,
        state.totalQuantity
      );
      return {
        ...state,
        discounts: remainingDiscounts,
        totalPrice: newTotalPriceWithoutDiscounts
      };

    default:
      return state;
  }
}

function calculateTotalPrice(items, discounts, totalQuantity) {
  const totalDiscount = discounts.reduce(
    (sum, discount) => sum + discount.value,
    0
  );
  const itemTotalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalPrice = itemTotalPrice - totalDiscount;
  return totalPrice;
}

export default cartReducer;
