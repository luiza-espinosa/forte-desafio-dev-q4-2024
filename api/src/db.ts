import { Pool } from 'pg';

export const pool = new Pool({
    user: 'admin', 
    host: 'localhost', 
    database: 'postgres', 
    password: 'admin',
    port: 5432, 
});
