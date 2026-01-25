import { ServiceApi } from './service.api';
import { log } from 'utils';
import { IPet } from '../interfaces/IPet';

export class PetApi extends ServiceApi {
  getPet(petId: number) {
    const request = this.agent('GET', `/v2/pet/${petId}`);
    return request.then(
      (result) => {
        log.info(`Get pet by petId '${petId}': ${JSON.stringify(result)}`);
        return result;
      },
      (error) => {
        log.warn(JSON.stringify(error));
        return error;
      },
    );
  }

  postPet(body: IPet) {
    const request = this.agent('POST', `/v2/pet`);
    return request.send(body).then(
      (result) => {
        log.info(`Create new pet: ${JSON.stringify(result)}`);
        return result;
      },
      (error) => {
        log.warn(JSON.stringify(error));
        return error;
      },
    );
  }

  deletePet(petId: number) {
    const request = this.agent('DELETE', `/v2/pet/${petId}`);
    return request.then(
      (result) => {
        log.info(`Delete pet by petId '${petId}': ${JSON.stringify(result)}`);
        return result;
      },
      (error) => {
        log.warn(JSON.stringify(error));
        return error;
      },
    );
  }
}
