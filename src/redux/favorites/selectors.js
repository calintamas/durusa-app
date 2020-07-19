const getAll = (state) => state.favorites.all.data;
const getByID = (eventID) => (state) =>
  getAll(state).find((i) => i === eventID);

export default {
  getAll,
  getByID
};
