import { IPet } from '../../interfaces/IPet';
import { FakerData } from '../faker.data';
import { log } from 'utils';

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

  const body = {
    id,
    category,
    name,
    photoUrls,
    tags,
    status,
  };
  log.info(`Create body for pet: ${JSON.stringify(body)}`);
  return body;
}
