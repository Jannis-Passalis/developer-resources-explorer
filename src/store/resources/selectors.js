export const selectResourcesThatAreFavorite = (devId) => (state) => {
  const findDev = state.developers.find((dev) => dev.id === devId);
  if (!findDev) {
    return [];
  }
  return state.resources.filter((res) => {
    return findDev.favorites.includes(res.id);
  });
};

export const getUniqueResourceTypes = (reduxState) => {
  const allRes = reduxState.resources;
  const allTypes = allRes.map((r) => r.type);
  const uniqueTypes = [...new Set(allTypes)];
  return uniqueTypes;
};
