import { PetApi } from '../api/petStore.api';
import { IPet } from '../interfaces/IPet';
import { assert } from 'chai';
import { joiAssert, petResponseSchema } from './joi.utils';

export class ServiceUtils {
  private petApi: PetApi;

  constructor() {
    this.petApi = new PetApi();
  }

  async createPet(body: IPet) {
    const response = await this.petApi.postPet(body);
    assert.equal(response.status, 200, 'Status code should be 200');
    joiAssert(response.body, petResponseSchema(body), `Wrong schema for ${response.request.url}`);
  }
}
