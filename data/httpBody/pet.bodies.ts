import { IPet } from '../../interfaces/IPet';
import { FakerData } from '../faker.data';

export function createPetBody(data: Partial<IPet> = {}): IPet {
  const {
    id = FakerData.getID(),
    category = { id: 1, name: 'homePets' },
    name = 'Sirko',
    photoUrls = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzSfksKjJx9A8lgHn27RkqtwWuNV6r2RhYQ&s'],
    tags = [
      {
        id: 1,
        name: 'grey',
      },
    ],
    status = 'available',
  } = data;
  return {
    id,
    category,
    name,
    photoUrls,
    tags,
    status,
  };
}
