export const selectResourcesThatAreFavorite = (devId) => (state) => {
  const findDev = state.developers.find((dev) => dev.id === devId);
  if (!findDev) {
    return [];
  }
  return state.resources.filter((res) => {
    return findDev.favorites.includes(res.id);
  });
};

export const selectLoggedinUser = (state) => {
  return state.developers.find((dev) => dev.id === state.user.id);
};

export const selectDevelopersWithFavorite = (favoriteId) => {
  return (state) => {
    return state.developers.filter((dev) => dev.favorites.includes(favoriteId));
  };
};
