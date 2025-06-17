import { Hook } from '@tokens/hook-token';

export class AuditHook implements Hook {
  name = 'AuditHook';

  run() {
    console.log(`[Hook] ${this.name} аудит...`);
  }
}
