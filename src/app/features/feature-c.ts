import {Component, inject} from '@angular/core';
import {DiRegistry} from '@core/di-registry';

@Component({
  selector: 'app-feature-c',
  template: `<h3>Feature C</h3>`,
})
export class FeatureC {
  registry = inject(DiRegistry);

  constructor() {
  }
}
