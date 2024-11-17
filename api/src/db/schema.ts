import { pool } from "../db";

export function generateSchema (){
    pool.query (`
        create table if not exists lendings (
            id text, 
            name text,
            author text,
            publicationYear text
        )`)
}