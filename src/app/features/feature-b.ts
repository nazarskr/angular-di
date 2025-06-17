import { Component, inject } from '@angular/core';
import { DiRegistry } from '@core/di-registry';
import {Logger} from '@services/logger';
import {MyLogger} from '@services/my-logger';

@Component({
  selector: 'app-feature-b',
  template: `<h3>Feature B</h3>`,
  providers: [
    {
      provide: Logger,
      useExisting: MyLogger,
    }
  ]
})
export class FeatureB {
  registry: DiRegistry = inject(DiRegistry);
  logger = inject(Logger);

  constructor() {
    this.logger.log('param 1', 'param 2')
  }
}
