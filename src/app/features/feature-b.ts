import {Component, inject} from '@angular/core';
import {DiRegistry} from '@core/di-registry';
import {Logger} from '@services/logger';

@Component({
  selector: 'app-feature-b',
  template: `<h3>Feature B</h3>`
})
export class FeatureB {
  registry: DiRegistry = inject(DiRegistry);
  logger: Logger = inject(Logger);

  constructor() {
    this.registry.register(this.constructor.name, this, this.logger.constructor.name);
    this.logger.log('Feature B', 'logs');
  }
}
