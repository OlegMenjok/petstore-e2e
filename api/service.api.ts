import superAgent from 'superagent';
import logger from 'superagent-logger';

export class ServiceApi {
  public baseUrl: string;
  protected agent: (method: 'POST' | 'PUT' | 'DELETE' | 'GET', url: string) => superAgent.SuperAgentRequest;

  constructor() {
    this.baseUrl = 'https://petstore.swagger.io';
    this.agent = (method, url) => {
      return superAgent(method, this.baseUrl + url)
        .set('Content-Type', 'application/json')
        .timeout({ deadline: 15000 })
        .use(logger({ timestamp: true }));
    };
  }
}
