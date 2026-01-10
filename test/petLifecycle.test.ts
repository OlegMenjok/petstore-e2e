import { PetApi } from '../api/petStore.api';
import { assert } from 'chai';
import { createPetBody } from '../data/httpBody';
import { FakerData } from '../data';

describe('Pet', () => {
  let petApi: PetApi;
  let petId: number;
  before(() => {
    petApi = new PetApi();
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

  it.only('Create new Pet', async () => {
    // Arrange
    const body = createPetBody({ id: petId });

    // Act
    const response = await petApi.postPet(body);

    // Assert
    assert.equal(response.status, 200, 'Status code should be 200');
  });
});
