import Conection from '../Loaders/databaseLoader'
//import * as sql from 'mssql'
import { Inject } from "typescript-ioc";

/**
 * 
 * @category DAO
 */
export class EmpleadosDAO {

	constructor(
		@Inject private databaseConnection: Conection
	) {
		// code...
	}
	public async EmpleadoCrear(body:any): Promise<void> {
		let data: any
		try {
		  const {nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario} = body
		  const connection = await this.databaseConnection.getPool()
			const query = await connection.query('INSERT INTO empleado(nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario) VALUES(?, ?, ?, ?, ?, ?, ?)',
			                            [nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario]);

			data = { 'code' :200, 'msg' : 'exitoso'} 
			connection.end();
			return data;
		}catch(error) {
			 data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}



	public async EmpleadoObtener(): Promise<void> {
		let data: any
		try {
		  const connection = await this.databaseConnection.getPool()
			const query = await connection.query('SELECT id_empleado,nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario FROM empleado');
			if(query.length > 0 ){
				data = { 'code' :200, 'rows' : query[0]} 
			}else{
				data = { 'code' :201, 'rows' : []} 
			}
			return data
		}catch(error) {
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}


	public async obtenerEmpleadosId(id:any): Promise<void> {
		let data: any
		try {
		  const connection = await this.databaseConnection.getPool()
			const query = await connection.query('SELECT id_empleado,nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario FROM empleado WHERE id_empleado = ?',[id]);
      connection.end();
      if(query.length > 0 ){
				data = { 'code' :200, 'rows' : query[0]} 
			}else{
				data = { 'code' :201, 'rows' : []} 
			}
			return data
		}catch(error) {
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}

	public async editarEmpleados(body:any): Promise<void> {
		let data: any
		try {
			const {id_empleado, nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario} = body
		  const connection = await this.databaseConnection.getPool()
			const query = await connection.query('UPDATE empleado SET nombres = ?, apellidos = ?, tipo_identificacion = ?, n_identificacion = ?, telefono = ?, correo = ?, salario = ? WHERE id_empleado = ?',
				                            [nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario, id_empleado]);
			if(query[0].affectedRows > 0){
				data = { 'code' :200, 'msg' : 'exitoso'}
			}else{
				data = { 'code' :201, 'msg' : 'error'} 
			}
      connection.end();
      return data
		}catch(error) {
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}

	public async eliminarEmpleados(id:any): Promise<void> {
		let data: any
		try {
		  const connection = await this.databaseConnection.getPool()
			const query = await connection.query('DELETE FROM empleado WHERE id_empleado = ?',[id]);
      connection.end();
      if(query[0].affectedRows > 0){
      	data = { 'code' :200, 'msg' : 'exitoso'}
      }else{
      	data = { 'code' :201, 'msg' : 'error'} 
      }
      return data
		}catch(error) {
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}
}