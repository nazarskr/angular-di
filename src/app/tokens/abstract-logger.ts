import { InjectionToken } from '@angular/core';

interface LoggerLike {
  id: string;
  label: string;
  log(source: string, message: string): void;
}

export const ABSTRACT_LOGGER = new InjectionToken<LoggerLike>('AbstractLogger');
