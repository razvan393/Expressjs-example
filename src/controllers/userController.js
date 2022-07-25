import userServices from "../services/userServices.js";

const getUsers = async (req, res, next) => {
  try {
    res.json(await userServices.getAll());
  } catch (err) {
    console.error(`Error while getting user`, err.message);
    next(err);
  }
};

export default { getUsers };
