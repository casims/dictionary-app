import { APP_STORAGE_NAME } from '../../globals/Globals';
import { createSlice } from '@reduxjs/toolkit';

// Setting up local storage if it doesnt already exist
function getBookmarks() {
    let bookmarksFromStorage = localStorage.getItem(APP_STORAGE_NAME);
    if (bookmarksFromStorage === null) {
        bookmarksFromStorage = [];
    } else {
        bookmarksFromStorage = JSON.parse(bookmarksFromStorage);
    };
    return bookmarksFromStorage;
};

const initialState = {
    items: getBookmarks()
};

// Finds position of targeted word in array from local storage
function getIndex(item, arr) {
    return arr.findIndex(arrItem => arrItem === item);
};

export const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        // Adds word to local storage
        addBookmark: (state, action) => {
            const newBookmarks = [...state.items, action.payload];
            localStorage.setItem(APP_STORAGE_NAME, JSON.stringify(newBookmarks));
            state.items = newBookmarks;
        },
        // Removes word from local storage
        deleteBookmark: (state, action) => {
            const itemsCopy = state.items;
            itemsCopy.splice(getIndex(action.payload, state.items), 1);
            localStorage.setItem(APP_STORAGE_NAME, JSON.stringify(itemsCopy));
            state.items = itemsCopy;
        }
    },
});

export const { addBookmark, deleteBookmark } = bookmarksSlice.actions

export default bookmarksSlice.reducer;