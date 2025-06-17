import {Logger} from '@services/logger';

export class SentryLogger {
  loggerId: string;

  constructor(loggerId: string) {
    this.loggerId = loggerId;
  }
  log() {
    console.log(this.loggerId);
  }
}
