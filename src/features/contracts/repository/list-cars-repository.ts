import { Car } from '../../../domain/entities/Car';

export interface ListCarsRepository {
  list(): Promise<Car[]>
}