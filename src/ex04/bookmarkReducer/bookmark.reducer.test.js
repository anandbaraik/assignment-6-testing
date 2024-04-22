import bookmarkReducer from "./bookmark.reducer";

describe("testing bookmark reducer", () => {
  it("test to handling ADD_BOOKMARK", () => {
    const initialState = {
      bookmarks: []
    };
    const action = {
      type: "ADD_BOOKMARK",
      payload: {
        id: 1,
        title: "google translate",
        url: "https://translate.google.com",
        tags: ["google", "translate"]
      }
    };
    const addedBookmark = bookmarkReducer(initialState, action);

    expect(addedBookmark).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "google translate",
          url: "https://translate.google.com",
          tags: ["google", "translate"]
        }
      ]
    });
  });

  it("test to handling REMOVE_BOOKMARK", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "Google",
          url: "https://google.co.in",
          tags: ["google", "india"]
        },
        {
          id: 2,
          title: "Bookmark 2",
          url: "http://bookmark2.com",
          tags: ["tag1", "tag2"]
        }
      ],
      filteredBookmarks: []
    };
    const action = {
      type: "REMOVE_BOOKMARK",
      payload: { id: 1 }
    };
    const removeBookMark = bookmarkReducer(initialState, action);

    expect(removeBookMark).toEqual({
      bookmarks: [
        {
          id: 2,
          title: "Bookmark 2",
          url: "http://bookmark2.com",
          tags: ["tag1", "tag2"],
        }
      ],
      filteredBookmarks: []
    });
  });

  it("test to handling UPDATE_TAGS", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "Google",
          url: "https://google.co.in",
          tags: ["google", "india"]
        }
      ],
      filteredBookmarks: []
    };
    const action = {
      type: "UPDATE_TAGS",
      payload: { id: 1, tags: ["tag1", "tag2"] }
    };
    const updateTags = bookmarkReducer(initialState, action);

    expect(updateTags).toEqual({
      bookmarks: [
        {
          id: 1,
          tags: ["tag1", "tag2"],
          title: "Google",
          url: "https://google.co.in"
        }
      ],
      filteredBookmarks: []
    });
  });

  it("test to handling FILTER_BOOKMARKS_BY_TAG", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "Google",
          url: "https://google.co.in",
          tags: ["google", "india"]
        },
        {
          id: 2,
          title: "Bookmark 2",
          url: "http://bookmark2.com",
          tags: ["tag1", "tag2"]
        }
      ],
      filteredBookmarks: []
    };
    const action = {
      type: "FILTER_BOOKMARKS_BY_TAG",
      payload: { tag: "tag2" }
    };
    const filterBookmarkByTag = bookmarkReducer(initialState, action);

    expect(filterBookmarkByTag.bookmarks[0]).toEqual({
      id: 1,
      title: "Google",
      url: "https://google.co.in",
      tags: ["google", "india"]
    });
    expect(filterBookmarkByTag.bookmarks[1]).toEqual({
      id: 2,
      title: "Bookmark 2",
      url: "http://bookmark2.com",
      tags: ["tag1", "tag2"]
    });
  });

  it("test to handling ADD_TAG ", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "Google",
          url: "https://google.co.in",
          tags: ["google", "india"]
        }
      ],
      filteredBookmarks: []
    };
    const action = {
      type: "ADD_TAG",
      payload: { id: 1, tag: "Blr" }
    };
    const addTag = bookmarkReducer(initialState, action);

    expect(addTag.bookmarks[0].tags).toEqual(["google", "india", "Blr"]);
  });

  it("test to handling REMOVE_TAG", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "Google",
          url: "https://google.co.in",
          tags: ["google", "india"]
        }
      ],
      filteredBookmarks: []
    };
    const action = {
      type: "REMOVE_TAG",
      payload: { id: 1, tag: "google" }
    };
    const removeTag = bookmarkReducer(initialState, action);

    expect(removeTag.bookmarks[0].tags).toEqual(["india"]);
  });
});
