const sql = {
  select (table, field, cond) {
    const base = `SELECT ${field} FROM ${table}`;
    return cond ? [`${base} WHERE id=?`, cond] : [base];
  },
  update () {

  },
  delete () {

  }
};

module.exports = sql;