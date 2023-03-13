
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";
import i18n from "i18next";

export interface LanguageState {
  language: "en" | "ar" | undefined;
}

const initialState: LanguageState = {
  language: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,

  reducers: {
    toggleLanguage: (state, action: PayloadAction<"en" | "ar" | undefined >) => {
      // eslint-disable-next-line default-case
      console.log(action.payload);
      state.language = action.payload;
      

      if (state.language === "ar") {
        document.body.setAttribute("dir", "rtl");
        i18n.changeLanguage("ar");
      } else if (state.language === "en") {
        document.body.setAttribute("dir", "ltr");
        i18n.changeLanguage("en");
      }
      else if (state.language === undefined) {
        document.body.setAttribute("dir", "ltr");
        i18n.changeLanguage("en");
      }
    },

  },
});

export const {  toggleLanguage } = languageSlice.actions;

export const getLanguage = (state: RootState) => state.language.language;

export default languageSlice;
