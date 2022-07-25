import userServices from "../services/userServices.js";

const getUsers = async (req, res, next) => {
  try {
    res.json(await userServices.getAll());
  } catch (err) {
    console.error(`Error while getting users`, err.message);
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
    console.error(`Error while getting user`, err.message);
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    if (!req?.params?.id) {
      throw "No parameter provided";
    }

    const response = await userServices.deleteUser(parseInt(req.params.id))
    res.json({message: response})
  } catch (error) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
}

export default { getUsers, getUser, deleteUser };
