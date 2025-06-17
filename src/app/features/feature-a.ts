import {Component, inject} from '@angular/core';
import {DiRegistry} from '@core/di-registry';
import {Logger} from '@services/logger';

@Component({
  selector: 'app-feature-a',
  template: `<h3>Feature A</h3>`,
})
export class FeatureA {
  registry: DiRegistry = inject(DiRegistry);
  logger: Logger = inject(Logger);

  constructor() {
    this.logger.log('type 1', 'feature a');
  }
}
