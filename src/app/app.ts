import {Component} from '@angular/core';
import {DiVisualizer} from '@core/di-visualizer/di-visualizer';

import {ConfigReader} from '@features/config-reader';
import {FeatureA} from '@features/feature-a';
import {FeatureB} from '@features/feature-b';
import {FeatureC} from '@features/feature-c';

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
  ]
})
export class App {}
