import { pool } from "./Connection";

export const insertNewOxygenLead = async (values: any) => {
  const exists = await checkIfLeadAlreadyExists(values[1],values[4]);
  // console.log(exists);

  if (exists == false) {
    const res = await pool.query(
      'INSERT INTO public."OxygenLeads"' +
        "(name, phone_number, locality, city, pincode, last_verified, verified_by, added_by, reports)" +
        " VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
      values
    );

    return values;
  } else {
    return exists;
  }
};

export const verifyOxygenLead = (id: number) => {
  pool
    .query(
      'UPDATE public."OxygenLeads" SET last_verified=$1, verified_by=verified_by+1 where id=$2',
      [new Date(), id]
    )
    .then((res) => {
      console.log(res.rowCount, "updated last_verified field");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllOxygenLeads = async () => {
  const res = await pool.query(
    'SELECT * FROM PUBLIC."OxygenLeads" ORDER BY last_verified DESC'
  );

  return res.rows;
};

const checkIfLeadAlreadyExists = async (phone: string[], pin: string) => {
  console.log(phone);

  const res = await pool.query(
    'SELECT * FROM PUBLIC."OxygenLeads" WHERE phone_number @> $1 AND pincode=$2',
    [phone,pin]
  );

  console.log(
    res.rowCount == 0 ? "New entry" : "Already exists "
  );

  if (res.rowCount > 0) return res.rows;
  else return false;
};

export const editOxygenLead = async (values: any[], id: number) => {
  const res = await pool.query(
    'UPDATE PUBLIC."OxygenLeads" SET name=$1, phone_number=$2, locality=$3, city=$4, pincode=$5 WHERE id=$6',
    [...values, id]
  );
  return res.rowCount;
};

export const reportOxygenLead = async (id: number) => {
  const res = await pool.query(
    'UPDATE PUBLIC."OxygenLeads" SET reports=reports+1 WHERE id=$1',
    [id]
  );
  return res.rowCount;
}

