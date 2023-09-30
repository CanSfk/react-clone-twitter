import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    userName: "Can",
    fullName: "s_can_50",
    avatar: "https://twitter.com/s_can_50/photo",
  },
  accounts: [
    {
      id: 1,
      userName: "Can",
      fullName: "s_can_50",
      avatar: "https://twitter.com/s_can_50/photo",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state'i manipule etme metodlari

    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },

    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
    },

    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
