const initialState = {
    products: [
      {
        id: 1,
        name: "Phone",
        category: "Electronics",
        price: 500,
        inStock: true
      },
      { id: 2, name: "Shirt", category: "Clothing", price: 20, inStock: true },
      {
        id: 3,
        name: "Laptop",
        category: "Electronics",
        price: 1000,
        inStock: true
      },
      { id: 4, name: "Jeans", category: "Clothing", price: 40, inStock: false }
    ],
    filters: {
      category: "All",
      searchQuery: "",
      sortBy: "price",
      ascending: true,
      priceRange: { min: 0, max: 1000 }
    }
  };

  function productReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case "SET_CATEGORY_FILTER":
        return {
          ...state,
          filters: {
            ...state.filters,
            category: payload
          }
        };

      case "SET_SEARCH_QUERY":
        return {
          ...state,
          filters: {
            ...state.filters,
            searchQuery: payload
          }
        };

      case "SET_SORT":
        return {
          ...state,
          filters: {
            ...state.filters,
            sortBy: payload.sortBy,
            ascending: payload.ascending
          }
        };

      case "SET_PRICE_RANGE":
        return {
          ...state,
          filters: {
            ...state.filters,
            priceRange: {
              min: payload.min,
              max: payload.max
            }
          }
        };

      case "TOGGLE_AVAILABILITY":
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === payload
              ? { ...product, inStock: !product.inStock }
              : product
          )
        };

      default:
        return state;
    }
  }

  export default productReducer;
