import { ListCars } from '../../features/list-cars/list-cars';
import { HttpRequest } from '../contracts/http-request';
import { HttpResponse } from '../contracts/http-response';

export class ListCarsController {

  constructor(
    private readonly listCars: ListCars
  ){}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { model, brand } = request.body;
    const output = await this.listCars.execute()
    return {
      statusCode: 200,
      body: output
    }
  }
}