import {Component, inject} from '@angular/core';
import {DiRegistry} from '../di-registry';

@Component({
  selector: 'app-di-visualizer',
  templateUrl: './di-visualizer.html',
  styleUrls: ['./di-visualizer.scss']
})
export class DiVisualizer {
  registry: DiRegistry = inject(DiRegistry);

  get instances() {
    return [...this.registry.getAll().entries()].map(([label, object]) => ({label, object}));
  }

  get graph() {
    return this.registry.getGraph();
  }

  getType(obj: any): string {
    return obj?.constructor?.name ?? 'unknown';
  }

  summarize(obj: any): string {
    if (!obj || typeof obj !== 'object') return String(obj);

    const result: Record<string, any> = {
      __type: obj.constructor?.name ?? 'unknown'
    };

    for (const key of Object.keys(obj)) {
      if (key === 'registry') continue;
      if (key.startsWith('__') || typeof obj[key] === 'function') continue;

      result[key] = obj[key];
    }

    return JSON.stringify(result, null, 2);
  }

  get registryDump(): string {
    return JSON.stringify(this.cleanRegistry(), null, 2);
  }

  cleanRegistry(): any {
    const result: any = {
      counterMap: Object.fromEntries(this.registry['counterMap']),
      instanceMap: Array.from(this.registry['instanceMap'].entries()).map(([label, instance]) => ({
        label,
        preview: {
          id: instance?.id,
          type: instance?.constructor?.name,
          label: instance?.label
        }
      })),
      graph: this.uniqueGraph
    };
    return result;
  }

  get uniqueGraph() {
    const seen = new Set<string>();
    return this.registry.getGraph().filter(edge => {
      const key = `${edge.parent}→${edge.dependency}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
}
