import { Car } from '../../domain/entities/Car';
import { SaveCarRepository } from '../contracts/repository/save-car-repository';
import { SaveCarDto } from './save-car.dto';

export class SaveCarFeature {
  constructor(
    private readonly saveCarRepository: SaveCarRepository
  ) {}

  async execute(input: SaveCarDto): Promise<void> {
    const car = new Car(input.brand, input.model)
    await this.saveCarRepository.save(car)
  }
}

