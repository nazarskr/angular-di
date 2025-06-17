import {Hook} from '@tokens/hook-token';

export class MetricsHook implements Hook {
  name = 'MetricsHook';
  run() {
    console.log(`[Hook] ${this.name} метрики`);
  }
}
