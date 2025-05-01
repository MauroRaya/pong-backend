import { Injectable } from "@nestjs/common";
import * as postgres from 'postgres'

@Injectable()
export class DatabaseService {
    readonly database: postgres.Sql;

    constructor() {
        console.log(process.env.DATABASE_URL);
        this.database = postgres(process.env.DATABASE_URL || '');
    }
}