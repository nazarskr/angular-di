import {Component, inject} from '@angular/core';
import {DiVisualizer} from '@core/di-visualizer/di-visualizer';

import {ConfigReader} from '@features/config-reader';
import {FeatureA} from '@features/feature-a';
import {FeatureB} from '@features/feature-b';
import {FeatureC} from '@features/feature-c';
import {Logger} from '@services/logger';
import {MyLogger} from '@services/my-logger';
import {SentryLogger} from '@services/sentry-logger';
import {SomeService} from '@services/some-service';

const FEATURES = [
  FeatureA,
  FeatureB,
  FeatureC,
  ConfigReader
];

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    DiVisualizer,
    ...FEATURES,
  ],
  providers: [Logger, MyLogger],
  // providers: [
  //   {
  //     provide: Logger,
  //     useClass: MyLogger,
  //   }
  // ]
  // providers: [
  //   SomeService,
  //   {
  //     provide: Logger,
  //     useFactory: (someService: SomeService) => {
  //       // const someService = inject(SomeService);
  //       return new SentryLogger(someService.id);
  //     },
  //     deps: [SomeService]
  //   }
  // ]
})
export class App {
}
