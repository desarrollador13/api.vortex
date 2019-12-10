import { Request, Response, NextFunction } from 'express'
import { Inject } from "typescript-ioc";
import { EmpleadosDAO } from '../DAO/EmpleadosDAO'



export default class EmpleadosController {
	constructor(
		@Inject private empleadosDAO: EmpleadosDAO,
	) {
	}

	async crearEmpleados(body: any): Promise<void> {
		let res:any;
		try {
			const {nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario} = body
			if(
				nombres == '' || 
				apellidos == '' || 
				tipo_identificacion == '' || 
				n_identificacion == '' ||
				salario == ''
			){
				res = { 'code' :200, 'msg' : 'los campos son obligatorios  menos telefono,correo'} 
				return res
			}
			let responseDao:any = await this.empleadosDAO.EmpleadoCrear(body)
			return responseDao
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

	async obtenerEmpleados(): Promise<void> {
		let res:any;
		try {
			let responseDao:any = await this.empleadosDAO.EmpleadoObtener()
			console.log(responseDao,'responseDao')
			return responseDao
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

	async obtenerEmpleadosId(id:any): Promise<void> {
		let res:any;
		try {
			let responseDao:any = await this.empleadosDAO.obtenerEmpleadosId(id)
			return responseDao
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

	async editarEmpleados(body:any): Promise<void> {
		let res:any;
		try {
			const {nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario} = body
			if(
				nombres == '' || 
				apellidos == '' || 
				tipo_identificacion == '' || 
				n_identificacion == '' ||
				salario == '' ||
				tipo_identificacion == ''
			){
				res = { 'code' :200, 'msg' : 'los campos son obligatorios menos telefono,correo'} 
				return res
			}
			let responseDao:any = await this.empleadosDAO.editarEmpleados(body)
			return responseDao
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

	async eliminarEmpleados(id:any): Promise<void> {
		let res:any;
		try {
			let responseDao:any = await this.empleadosDAO.eliminarEmpleados(id)
			return responseDao
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

}
