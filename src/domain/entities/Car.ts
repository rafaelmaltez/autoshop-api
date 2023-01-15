import { InvalidParamError } from '../errors'

export class Car {
  constructor(
    private readonly brand: string,
    private readonly model: string
  ) {
    if(!brand || brand.length < 3) throw new InvalidParamError('brand')
    if(!model || model.length < 3) throw new InvalidParamError('model')
  }
}