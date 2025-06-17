import { Logger } from './logger';
import { DiRegistry } from '@core/di-registry';

export class Api {
  readonly url: string;
  readonly label: string;

  constructor(url: string, logger: Logger, registry: DiRegistry) {
    this.url = url;
    this.label = registry.register(this.constructor.name, this);
    logger.log(this.constructor.name, `URL: ${this.url}`);
  }

  get(endpoint: string) {
    return `GET ${this.url}/${endpoint}`;
  }
}
