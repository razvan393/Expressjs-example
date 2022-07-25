import userServices from "../services/userServices.js";

const getUsers = async (req, res, next) => {
  try {
    res.json(await userServices.getAll());
  } catch (err) {
    console.error(`Error while getting users`);
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    if (!req?.params?.id) {
      throw "No parameter provided";
    }

    const response = await userServices.getUser(parseInt(req.params.id));

    if (response?.length === 0) {
      throw "No user found";
    }

    res.json(response);
  } catch (err) {
    console.error(`Error while getting user`);
    next(err);
  }
};

const addUser = async (req, res, next) => {
  try {
    if (!req?.body?.name) {
      throw "No name provided";
    }

    const response = await userServices.addUser({
      name: req.body.name,
      location: req?.body?.location || "",
      position: req?.body?.position || "",
      age: req?.body?.age || "",
    });

    res.json(response);
  } catch (err) {
    console.error(`Error while adding user`);
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    if (!req?.params?.id) {
      throw "No parameter provided";
    }

    const response = await userServices.deleteUser(parseInt(req.params.id));
    res.json({ message: response });
  } catch (err) {
    console.error(`Error while deleting user`);
    next(err);
  }
};

export default { getUsers, getUser, deleteUser, addUser };
