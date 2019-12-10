//import mysql from 'mysql';
import mysql  from 'promise-mysql2'; 
import { Singleton } from 'typescript-ioc';
import config from '../config';

/**
 * @category Database
 */
@Singleton
export default class DatabaseConnection {
    constructor() {
       
    }

    public async getPool() {
        const connection = await mysql.createConnection({
           host: 'localhost',
           user: 'root',
           password: '',
           database: 'vortex_empleado',
           port: 3306
        });
      return connection 
    }
}