import { NextFunction, Request, Response } from 'express';
import { Controller } from '../../../presentation/contracts/controller';

export class RouteAdapter {
  static adapt(controller: Controller) {
    return async function (req: Request, res: Response, next: NextFunction) {
      try {
        const httpResponse = await controller.handle({ params: req.params, body: req.body})
        return res.status(httpResponse.statusCode).json(httpResponse.body)
      } catch (error) {
        next(error)
      }
    }
  }
}