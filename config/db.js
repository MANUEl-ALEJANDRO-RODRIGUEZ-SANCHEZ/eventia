import { createPool } from "mysql2/promise";

const conn = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export {conn};


// import { createPool } from "mysql2/promise";

// const conn = createPool({
//     uri: process.env.DB_URL
// });

// export { conn };
