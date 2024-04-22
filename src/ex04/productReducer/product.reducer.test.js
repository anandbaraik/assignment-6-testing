import productReducer from "./product.reducer";

describe("testing productReducer", () => {
  it("test to handle SET_CATEGORY_FILTER", () => {
    const initialState = {
      products: [],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };
    const action = {
      type: "SET_CATEGORY_FILTER",
      payload: "Electronics"
    };
    const category = productReducer(initialState, action);

    expect(category.filters.category).toBe("Electronics");
  });

  it("test to handle SET_SEARCH_QUERY", () => {
    const initialState = {
      products: [],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };
    const action = {
      type: "SET_SEARCH_QUERY",
      payload: "Phone"
    };
    const setSearchQuery = productReducer(initialState, action);

    expect(setSearchQuery.filters.searchQuery).toBe("Phone");
  });

  it("test to handle SET_SORT", () => {
    const initialState = {
      products: [],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };
    const action = {
      type: "SET_SORT",
      payload: { sortBy: "name", ascending: false }
    };
    const setSort = productReducer(initialState, action);

    expect(setSort.filters.sortBy).toBe("name");
  });

  it("test to handle SET_PRICE_RANGE", () => {
    const initialState = {
      products: [],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };
    const action = {
      type: "SET_PRICE_RANGE",
      payload: { min: 50, max: 500 }
    };
    const setPriceRangeSlider = productReducer(initialState, action);

    expect(setPriceRangeSlider.filters.priceRange.min).toBe(50);
    expect(setPriceRangeSlider.filters.priceRange.max).toBe(500);
  });

  it("test to handle TOGGLE_AVAILABILITY", () => {
    const initialState = {
      products: [
        { id: 1, name: "Phone", inStock: true },
        { id: 2, name: "Shirt", inStock: true }
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };
    const action = {
      type: "TOGGLE_AVAILABILITY",
      payload: 1
    };
    const toggleState = productReducer(initialState, action);

    expect(toggleState.products[0].inStock).toBe(false);
    expect(toggleState.products[1].inStock).toBe(true);
  });
});
