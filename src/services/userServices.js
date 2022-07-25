import datastore from "../datastore.js";

const getAll = async () => {
  return datastore;
};

const getUser = async (id) => {
  return datastore.filter((user) => user.id === id);
};

const deleteUser = async (id) => {
  const index = datastore.indexOf(datastore.filter((user) => user.id === id)[0]);
  if (index !== -1) {
    datastore.splice(index, 1);
    return "User deleted";
  } else {
    return "User not found";
  }
};

export default { getAll, getUser, deleteUser };
