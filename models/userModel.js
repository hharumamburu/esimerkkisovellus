'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_user');
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const getUser = async (id) => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM wop_user WHERE user_id = ?',
        [id]);
    console.log('rows', rows);
    return rows;

  }catch (e) {
    console.log('error', e.message);
  }
}

const addUser = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO wop_user (name, email, password) VALUES (?,?,?)',
        params);
    console.log('rows', rows);
    return rows;

  }catch (e) {
    console.log('error', e.message);
  }
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
};
