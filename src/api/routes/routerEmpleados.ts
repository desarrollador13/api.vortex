import { Request, Response, NextFunction, Router } from 'express'
import EmpleadosController from '../../controllers/empleadosController'
import { Container } from "typescript-ioc";


export default class routerEmpleados {
  public app: Router
  constructor(router: Router) {
    this.app = router
  }
  router(): void {
    this.app.post(
      '/empleados/create/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const {nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario} = req.body
          const empleadosController: EmpleadosController = Container.get(EmpleadosController);
          let responseModel = await empleadosController.crearEmpleados(req.body);
          console.log(responseModel)
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

    this.app.get(
      '/empleados/list/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const empleadosController: EmpleadosController = Container.get(EmpleadosController);
          let responseModel = await empleadosController.obtenerEmpleados();
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

    this.app.get(
      '/empleados/list/:id',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
        	const { id } = req.params
          const empleadosController: EmpleadosController = Container.get(EmpleadosController);
          let responseModel = await empleadosController.obtenerEmpleadosId(id);
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

    this.app.put(
      '/empleados/edit/:id',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { id } = req.params
          const {nombres, apellidos, tipo_identificacion, n_identificacion, telefono, correo, salario} = req.body
          const empleadosController: EmpleadosController = Container.get(EmpleadosController);
          let responseModel = await empleadosController.editarEmpleados(req.body);
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )


    this.app.delete(
      '/empleados/delete/:id',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
        	const { id } = req.params
          const empleadosController: EmpleadosController = Container.get(EmpleadosController);
          let responseModel = await empleadosController.eliminarEmpleados(id);
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )
  }
}