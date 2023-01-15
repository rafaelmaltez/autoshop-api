import { Car } from '../../../domain/entities/Car';

export interface SaveCarRepository {
  save(car: Car): Promise<void>
}