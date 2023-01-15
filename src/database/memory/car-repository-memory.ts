import { Car } from '../../domain/entities/Car';
import { ListCarsRepository } from '../../features/contracts/repository/list-cars-repository';
import { SaveCarRepository } from '../../features/contracts/repository/save-car-repository';

export class CarRepositoryMemory implements SaveCarRepository, ListCarsRepository{
  private cars: Car[]
  private static instance: CarRepositoryMemory
  private constructor() {
    this.cars = []
  }
  static create() {
    if(! this.instance) this.instance = new CarRepositoryMemory()
    return this.instance
  }
  async list(): Promise<Car[]> {
    return this.cars
  }
  async save(car: Car): Promise<void> {
    this.cars.push(car);
  }
}