import {Component, inject} from '@angular/core';
import {DiRegistry} from '@core/di-registry';
import {Logger} from '@services/logger';

@Component({
  selector: 'app-feature-a',
  template: `<h3>Feature A</h3>`
})
export class FeatureA {
  registry: DiRegistry = inject(DiRegistry);

  constructor(private logger: Logger) {
    this.registry.register(this.constructor.name, this, this.logger.constructor.name);
    this.logger.log('Feature A', 'logs');
  }
}
