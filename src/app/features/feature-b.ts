import { Component, inject } from '@angular/core';
import { DiRegistry } from '@core/di-registry';

@Component({
  selector: 'app-feature-b',
  template: `<h3>Feature B</h3>`
})
export class FeatureB {
  registry: DiRegistry = inject(DiRegistry);

  constructor() {
  }
}
