import { CarRepositoryMemory } from '../../../database/memory/car-repository-memory'
import { SaveCarFeature } from '../../../features/save-car/save-car'
import { Controller } from '../../../presentation/contracts/controller'
import { SaveCarController } from '../../../presentation/controllers/save-car-controller'

export default function makeSavecarController(): Controller {
  const saveCarRepository = CarRepositoryMemory.create()
  const saveCarFeature = new SaveCarFeature(saveCarRepository)
  const saveCarController = new SaveCarController(saveCarFeature)
  return saveCarController
}