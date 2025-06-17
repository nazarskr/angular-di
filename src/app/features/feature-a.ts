import {Component, inject} from '@angular/core';
import {DiRegistry} from '@core/di-registry';

@Component({
  selector: 'app-feature-a',
  template: `<h3>Feature A</h3>`,
})
export class FeatureA {
  registry: DiRegistry = inject(DiRegistry);

  constructor() {
  }
}
