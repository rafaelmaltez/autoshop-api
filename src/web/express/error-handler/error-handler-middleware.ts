import { NextFunction, Request, Response } from 'express';
import { errorCatalog } from './error-catalog';

export default async function(err: Error, req: Request, res: Response, next: NextFunction) {
  if(err) {
    return res.status(errorCatalog[err.name] || 500).json({ message: err.message })
  }
}