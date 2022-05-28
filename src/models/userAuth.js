const db = require("../db/connection");

//contoh
function getUser(id) {
    return db
      .query(`SELECT id, name, gender, image, age FROM Users WHERE id = $1`, [id])
      .then((res) => {
        const User = res.rows[0];
        if (!User) {
          const error = new Error(`User with ID '${id}' not found`);
          error.status = 404;
          throw error;
        }
        return User;
      });
}

module.exports = {
    getUser
};