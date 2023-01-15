import { CarRepositoryMemory } from '../../../database/memory/car-repository-memory'
import { ListCars } from '../../../features/list-cars/list-cars'
import { Controller } from '../../../presentation/contracts/controller'
import { ListCarsController } from '../../../presentation/controllers/list-cars-controller'

export default function makeListCarsController(): Controller {
  const listCarsrepository = CarRepositoryMemory.create()
  const listCars = new ListCars(listCarsrepository)
  const listCarsController = new ListCarsController(listCars)
  return listCarsController
}