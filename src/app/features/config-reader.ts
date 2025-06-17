import { Component, inject } from '@angular/core';
import { DiRegistry } from '@core/di-registry';

@Component({
  selector: 'app-config-reader',
  template: `<h3>Config Reader</h3>`
})
export class ConfigReader {
  registry = inject(DiRegistry);

  constructor() {
  }
}
