const initialState = {
    bookmarks: [],
    filteredBookmarks: []
  };

  function bookmarkReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case "ADD_BOOKMARK":
        return {
          ...state,
          bookmarks: [...state.bookmarks, payload]
        };

      case "REMOVE_BOOKMARK":
        return {
          ...state,
          bookmarks: state?.bookmarks?.filter(
            (bookmark) => bookmark?.id !== payload?.id
          ),
          filteredBookmarks: state?.filteredBookmarks?.filter(
            (bookmark) => bookmark?.id !== payload?.id
          )
        };

      case "UPDATE_TAGS":
        return {
          ...state,
          bookmarks: state?.bookmarks?.map((bookmark) =>
            bookmark?.id === payload?.id
              ? { ...bookmark, tags: payload?.tags }
              : bookmark
          ),
          filteredBookmarks: state?.filteredBookmarks?.map((bookmark) =>
            bookmark?.id === payload?.id
              ? { ...bookmark, tags: payload?.tags }
              : bookmark
          )
        };

      case "FILTER_BOOKMARKS_BY_TAG":
        const filteredBookmarks = state?.bookmarks?.filter((bookmark) =>
          bookmark?.tags?.includes(payload?.tag)
        );
        return {
          ...state,
          filteredBookmarks
        };

      case "ADD_TAG":
        return {
          ...state,
          bookmarks: state?.bookmarks?.map((bookmark) =>
            bookmark?.id === payload?.id
              ? { ...bookmark, tags: [...bookmark.tags, payload?.tag] }
              : bookmark
          ),
          filteredBookmarks: state?.filteredBookmarks?.map((bookmark) =>
            bookmark?.id === payload?.id
              ? { ...bookmark, tags: [...bookmark.tags, payload?.tag] }
              : bookmark
          )
        };

      case "REMOVE_TAG":
        return {
          ...state,
          bookmarks: state?.bookmarks?.map((bookmark) =>
            bookmark?.id === payload?.id
              ? {
                  ...bookmark,
                  tags: bookmark?.tags?.filter((tag) => tag !== payload?.tag)
                }
              : bookmark
          ),
          filteredBookmarks: state?.filteredBookmarks?.map((bookmark) =>
            bookmark?.id === payload?.id
              ? {
                  ...bookmark,
                  tags: bookmark?.tags?.filter((tag) => tag !== payload?.tag)
                }
              : bookmark
          )
        };

      default:
        return state;
    }
  }

  export default bookmarkReducer;
