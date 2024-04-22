import cartReducer from "./cart.reducer";

describe("testing cartReducer", () => {
  it("should add item to cart", () => {
    //Arrange
    const initialState = {
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: []
    };

    const action = {
      type: "ADD_TO_CART",
      payload: {
        id: 1,
        name: "Nokia 500",
        price: 30000
      }
    };

    //Act
    const updatedCart = cartReducer(initialState, action);

    //Assert
    expect(updatedCart).toEqual({
      items: [{ id: 1, name: "Nokia 500", price: 30000, quantity: 1 }],
      totalPrice: 30000,
      totalQuantity: 1,
      discounts: []
    });
  });

  it("should remove an item from cart", () => {
    //Arrange
    const initialState = {
      items: [{ id: 1, name: "Nokia 500", price: 30000, quantity: 1 }],
      totalPrice: 30000,
      totalQuantity: 1,
      discounts: []
    };

    const action = {
      type: "REMOVE_FROM_CART",
      payload: {
        itemId: 1
      }
    };

    //Act
    const updatedCart = cartReducer(initialState, action);

    //Assert
    expect(updatedCart).toEqual({
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: []
    });
  });

  it("should increment quantity of an item in cart", () => {
    //Arrange
    const initialState = {
      items: [{ id: 1, name: "Nokia 500", price: 30000, quantity: 1 }],
      totalPrice: 30000,
      totalQuantity: 1,
      discounts: []
    };

    const action = {
      type: "UPDATE_QUANTITY",
      payload: {
        itemId: 1,
        updateType: "INCREMENT"
      }
    };
    //Act
    const updatedCart = cartReducer(initialState, action);

    //Assert
    expect(updatedCart).toEqual({
      items: [{ id: 1, name: "Nokia 500", price: 30000, quantity: 2 }],
      totalPrice: 60000,
      totalQuantity: 2,
      discounts: []
    });
  });

  it("should decrement quantity of an item in cart", () => {
    //Arrange
    const initialState = {
      items: [{ id: 1, name: "Nokia 500", price: 30000, quantity: 2 }],
      totalPrice: 60000,
      totalQuantity: 2,
      discounts: []
    };

    const action = {
      type: "UPDATE_QUANTITY",
      payload: {
        itemId: 1,
        updateType: "DECREMENT"
      }
    };
    //Act
    const updatedCart = cartReducer(initialState, action);

    //Assert
    expect(updatedCart).toEqual({
      items: [{ id: 1, name: "Nokia 500", price: 30000, quantity: 1 }],
      totalPrice: 30000,
      totalQuantity: 1,
      discounts: []
    });
  });

  it("should remove an item if quantity is 1 if decrementing quantity", () => {
    // Arrange
    const initialState = {
      items: [{ id: 1, name: "Nokia 500", price: 30000, quantity: 1 }],
      totalPrice: 30000,
      totalQuantity: 1,
      discounts: []
    };

    const action = {
      type: "UPDATE_QUANTITY",
      payload: {
        itemId: 1,
        updateType: "DECREMENT"
      }
    };

    // Act
    const updatedCart = cartReducer(initialState, action);

    // Assert
    expect(updatedCart).toEqual({
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: []
    });
  });

  it("should apply discount to cart", () => {
    // Arrange
    const initialState = {
      items: [
        { id: 1, name: "Dell vostro", price: 70000, quantity: 1 },
        { id: 2, name: "Dell inspiron", price: 64000, quantity: 1 }
      ],
      totalPrice: 164000,
      totalQuantity: 2,
      discounts: []
    };

    const action = {
      type: "ADD_DISCOUNT",
      payload: {
        discount: {
          id: 1,
          value: 10000
        }
      }
    };

    //Act
    const updatedCart = cartReducer(initialState, action);

    //Assert
    expect(updatedCart).toEqual({
      items: [
        { id: 1, name: "Dell vostro", price: 70000, quantity: 1 },
        { id: 2, name: "Dell inspiron", price: 64000, quantity: 1 }
      ],
      totalPrice: 124000,
      totalQuantity: 2,
      discounts: [{ id: 1, value: 10000 }]
    });
  });

  it("should remove discount from cart", () => {
    // Arrange
    const initialState = {
      items: [
        { id: 1, name: "Dell vostro", price: 70000, quantity: 1 },
        { id: 2, name: "Dell inspiron", price: 64000, quantity: 1 }
      ],
      totalPrice: 124000,
      totalQuantity: 2,
      discounts: [{ id: 1, value: 10000 }]
    };

    const action = {
      type: "REMOVE_DISCOUNT",
      payload: {
        discountId: 1
      }
    };

    //Act
    const updatedCart = cartReducer(initialState, action);

    //Assert
    expect(updatedCart).toEqual({
      items: [
        { id: 1, name: "Dell vostro", price: 70000, quantity: 1 },
        { id: 2, name: "Dell inspiron", price: 64000, quantity: 1 }
      ],
      totalPrice: 134000,
      totalQuantity: 2,
      discounts: []
    });
  });

  it("should apply promotion to cart", () => {
    // Arrange
    const initialState = {
      items: [
        { id: 1, name: "Dell vostro", price: 70000, quantity: 1 },
        { id: 2, name: "Dell inspiron", price: 64000, quantity: 1 }
      ],
      totalPrice: 134000,
      totalQuantity: 2,
      discounts: [{ id: 1, value: 10000 }]
    };

    const action = {
      type: "APPLY_PROMOTION",
      payload: {
        promotion: {
          id: 2,
          value: 10000
        }
      }
    };

    // Act
    const updatedCart = cartReducer(initialState, action);

    // Assert
    expect(updatedCart).toEqual({
      items: [
        { id: 1, name: "Dell vostro", price: 70000, quantity: 1 },
        { id: 2, name: "Dell inspiron", price: 64000, quantity: 1 }
      ],
      totalPrice: 114000,
      totalQuantity: 2,
      discounts: [
        { id: 1, value: 10000 },
        { id: 2, value: 10000 }
      ]
    });
  });
});
