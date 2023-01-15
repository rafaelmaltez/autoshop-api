import { Car } from '../../domain/entities/Car';
import { ListCarsRepository } from '../contracts/repository/list-cars-repository';

export class ListCars {
  constructor(private listCarsRepository: ListCarsRepository) {}
  async execute(): Promise<Car[]> {
    return this.listCarsRepository.list()
  }
}