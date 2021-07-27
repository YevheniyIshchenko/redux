export const LANGUAGE = "SET/LANGUAGE";

export const setLanguage = (language) => {
  return {
    type: LANGUAGE,
    payload: {
      language,
    },
  };
};
