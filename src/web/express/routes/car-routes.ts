import { NextFunction, Request, Response, Router } from 'express';
import { ListCars } from '../../../features/list-cars/list-cars';
import { SaveCarFeature } from '../../../features/save-car/save-car';
import { CarRepositoryMemory } from '../../../database/memory/car-repository-memory';
import { RouteAdapter } from '../adapter/route-adapter';
import makeSavecarController from '../factories/save-car-controller-factory';
import makeListCarsController from '../factories/list-car-controller-factory';

const carRouter = Router()

carRouter.post('/cars', RouteAdapter.adapt(makeSavecarController()))

carRouter.get('/cars', RouteAdapter.adapt(makeListCarsController()))

export default carRouter

