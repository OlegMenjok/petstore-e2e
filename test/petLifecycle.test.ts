import { PetApi } from '../api/petStore.api';
import { assert } from 'chai';
import { createPetBody } from '../data/httpBody';
import { FakerData } from '../data';
import { joiAssert, petResponseSchema, ServiceUtils } from '../utils';

describe('Pet', () => {
  let petApi: PetApi;
  let petId: number;
  let serviceUtils: ServiceUtils;
  before(() => {
    petApi = new PetApi();
    serviceUtils = new ServiceUtils();
  });

  beforeEach(() => {
    petId = FakerData.getID();
  });

  it('get pet', async () => {
    // Act
    const response = await petApi.getPet(2);

    // Assert
    assert.equal(response.status, 200, 'Status code should be 201');
  });

  it('Create new Pet', async () => {
    // Arrange
    const body = createPetBody({ id: petId });

    // Act
    const response = await petApi.postPet(body);

    // Assert
    assert.equal(response.status, 200, 'Status code should be 200');
    joiAssert(response.body, petResponseSchema(body), `Wrong schema for ${response.request.url}`);
  });

  it('Get created pet', async () => {
    // Arrange
    const body = createPetBody({ id: petId });
    await serviceUtils.createPet(body);

    // Act
    const response = await petApi.getPet(petId);

    // Assert
    assert.equal(response.status, 200, 'Status code should be 200');
    joiAssert(response.body, petResponseSchema(body), `Wrong schema for ${response.request.url}`);
  });
});
