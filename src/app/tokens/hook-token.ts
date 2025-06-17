import { InjectionToken } from '@angular/core';

export interface Hook {
  name: string;
  run(): void;
}

export const HOOKS = new InjectionToken<Hook[]>('HOOKS');

// export const HOOKS = new InjectionToken<Hook[]>('HOOKS', {
//   providedIn: 'root',
//   factory: () => []
// });
