import { Injectable, inject } from '@angular/core';
import { DiRegistry } from '@core/di-registry';

@Injectable()
export class Logger {
  id: string;
  label: string;

  constructor() {
    const registry: DiRegistry = inject(DiRegistry);
    this.id = Math.random().toString(36).slice(2, 8);
    this.label = registry.register(this.constructor.name, this);
    console.log(`Створено: ${this.label}`);
  }

  log(source: string, message: string) {
    console.log(`[${source}][${this.label}] ${message}`);
  }
}
