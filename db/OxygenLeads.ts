import {pool} from './Connection'

export const insertNewOxygenLead = async (values: any) => {
  const exists = await checkIfLeadAlreadyExists(values[2]);

  if (exists == false) {
    const res = await pool.query(
      'INSERT INTO public."OxygenLeads"( name, address, phone, last_verified, verfied_by, "user", email) VALUES ($1,$2,$3,$4,$5,$6, $7);',
      values
    );

    console.log(res.rowCount, " row inserted with values:", values);
    return {inserted: true};
  } else {
    console.log("Value exists in DB", exists);

    return {...exists, alreadyInDB: true};
  }
};

export const verifyOxygenLead = (id: number) => {
  pool
    .query(
      'UPDATE public."OxygenLeads" SET last_verified=$1, verfied_by=verfied_by+1 where id=$2',
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
  const res =  await pool
    .query('SELECT * FROM PUBLIC."OxygenLeads" ORDER BY last_verified DESC')

    return res.rows;
    
};

const checkIfLeadAlreadyExists = async (phone: string) => {
  const res = await pool.query(
    'SELECT * FROM PUBLIC."OxygenLeads" WHERE PHONE = $1',
    [phone]
  );

  console.log(res.rowCount==0?"New entry":"Already exists");

  if (res.rowCount > 0) return res.rows;
  else return false;
};

export const editOxygenLead = async (values: any[], id: number)=>{
    const res = await pool.query('UPDATE PUBLIC."OxygenLeads" SET name=$1, address=$2, phone=$3 WHERE id=$4',[...values,id])
    return res.rowCount
}

const testFunction = async () => {

    let res = await editOxygenLead(["TestO2","Kolkata","9232475165"],20)
    console.log(res);
    
  
};

// testFunction()
