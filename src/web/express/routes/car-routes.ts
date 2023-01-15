import { Router } from 'express';
import { RouteAdapter } from '../adapter/route-adapter';
import makeSavecarController from '../factories/save-car-controller-factory';
import makeListCarsController from '../factories/list-car-controller-factory';

const carRouter = Router()

carRouter.post('/cars', RouteAdapter.adapt(makeSavecarController()))

carRouter.get('/cars', RouteAdapter.adapt(makeListCarsController()))

export default carRouter

