import datastore from "../datastore.js";

const filterById = (id) => {
  return datastore.filter((user) => user.id === id);
};

const getAll = async () => {
  return datastore;
};

const getUser = async (id) => {
  return filterById(id);
};

const addUser = async (userInfo) => {
  const newId = datastore[datastore.length - 1].id + 1;

  datastore.push({
    id: newId,
    ...userInfo,
  });

  return datastore;
};

const deleteUser = async (id) => {
  const index = datastore.indexOf(filterById(id)[0]);
  if (index !== -1) {
    datastore.splice(index, 1);
    return "User deleted";
  } else {
    return "User not found";
  }
};

export default { getAll, getUser, deleteUser, addUser };
