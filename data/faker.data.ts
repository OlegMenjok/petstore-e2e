import { faker } from '@faker-js/faker';
import moment from 'moment';
import { v4 as uuidV4 } from 'uuid';

export class FakerData {
  static getID(min = 10000, max = 10000000) {
    return faker.number.int({ min, max });
  }

  static getStringID(min = 10000, max = 10000000) {
    const id = FakerData.getID(min, max);
    return id.toString();
  }

  static getTodayDateISOString() {
    return moment().toISOString();
  }

  static getTomorrowDateISOString() {
    return moment(FakerData.getTodayDateISOString()).add(1, 'days').toISOString();
  }

  static getYesterdayDateISOString() {
    return moment(FakerData.getTodayDateISOString()).subtract(1, 'days').toISOString();
  }

  static getTodayDateISOStringPlusDays(days) {
    return moment(FakerData.getTodayDateISOString()).add(days, 'days').toISOString();
  }

  static getTodayDateISOStringMinusDays(days) {
    return moment(FakerData.getTodayDateISOString()).subtract(days, 'days').toISOString();
  }

  static getTodayDateISOStringPlusMinutes(minutes) {
    return moment(FakerData.getTodayDateISOString()).add(minutes, 'minutes').toISOString();
  }

  static getTodayDateISOStringMinusMinutes(minutes) {
    return moment(FakerData.getTodayDateISOString()).subtract(minutes, 'minutes').toISOString();
  }

  static getTodayDateISOStringPlusSeconds(seconds) {
    return moment(FakerData.getTodayDateISOString()).add(seconds, 'seconds').toISOString();
  }

  static getUUID() {
    return uuidV4();
  }
}
