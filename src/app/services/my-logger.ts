export class MyLogger {
  log(param1: string, param2: string) {
    console.error('Some error', { param1, param2 });
  }
}
