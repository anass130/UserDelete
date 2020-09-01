import moment from 'moment';
import dbQuery from '../db/dbQuery';
import  queries  from '../db/queries';
import {dateFormat} from '../helpers/utils';
import {
  errorMessage, successMessage, status,
} from '../helpers/status';

const getUsers = async (req, res) => {
  const created_on = dateFormat();
  try {
    const { rows } = await dbQuery.query(queries.userListQuery);
    successMessage.data = rows;
    return res.status(status.success).send(successMessage);
  } catch (error) {
    console.log("Error : " , JSON.stringify(error));
    return res.status(status.error).send(error);
  }
};

const deleteUser = (req, res) => {
  console.log(req.body)
  const name = req.body;
  const queryText = `
    DELETE FROM shipping.app_user
    WHERE user_id='${name.user_id}';
  `
  dbQuery.queryDelete(queryText,name);
};

export {
  getUsers,
  deleteUser
};
