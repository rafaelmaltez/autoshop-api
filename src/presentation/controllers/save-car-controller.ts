import { SaveCarFeature } from '../../features/save-car/save-car';
import { HttpRequest } from '../contracts/http-request';
import { HttpResponse } from '../contracts/http-response';

export class SaveCarController {

  constructor(
    private readonly saveCar: SaveCarFeature
  ){}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { model, brand } = request.body;
    const output = await this.saveCar.execute({ model, brand})
    return {
      statusCode: 201,
      body: output
    }
  }
}