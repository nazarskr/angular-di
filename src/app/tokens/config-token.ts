import {InjectionToken} from '@angular/core';
import {AppConfig} from '@core/config/app-config';

export const CONFIG_TOKEN = new InjectionToken<AppConfig>('CONFIG_TOKEN');

export const CONFIG_VALUE: AppConfig = {
  apiUrl: 'https://api.example.com',
  featureFlags: {
    newDashboard: false
  }
};
