import {Injectable} from '@angular/core';
import type {AppConfig} from './app-config';

@Injectable()
export class AppConfigLoader {
  private config!: AppConfig;

  async load(): Promise<void> {
    const res = await fetch('/config/config.json');
    this.config = await res.json();
  }

  get value(): AppConfig {
    return this.config;
  }
}
