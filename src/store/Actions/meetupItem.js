export const addFavorites = (dat) => ({
  type: "ADD_FAVORITES_ARRAY",
  dat,
});
export const deleteFavorites = (value) => ({
  type: "DELETE_FAVORITES_ARRAY",
  value,
});
