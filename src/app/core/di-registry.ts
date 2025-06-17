import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DiRegistry {
  private counterMap = new Map<string, number>();
  private instanceMap = new Map<string, any>();
  private graph: Array<{ parent: string; dependency: string }> = [];

  register(tokenName: string, instance: any, parentName?: string): string {
    const count = (this.counterMap.get(tokenName) ?? 0) + 1;
    this.counterMap.set(tokenName, count);

    const label = `${tokenName}: instance ${count}`;
    this.instanceMap.set(label, instance);

    if (parentName) {
      this.graph.push({ parent: parentName, dependency: label });
    }

    console.log(`[DI] Registered ${label}${parentName ? ` (used by ${parentName})` : ''}`);
    return label;
  }

  getGraph(): Array<{ parent: string; dependency: string }> {
    return this.graph;
  }

  getAll(): Map<string, any> {
    return this.instanceMap;
  }

  getInstancesByType(typeName: string): string[] {
    return [...this.instanceMap.keys()].filter(label =>
      label.startsWith(typeName)
    );
  }
}
