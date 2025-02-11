export const mergeArray = (state, payload) => {
  return state ? [...state, ...payload] : payload;
};
