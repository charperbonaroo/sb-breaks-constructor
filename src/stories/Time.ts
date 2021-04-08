export class Time {
  constructor(private time = 0) {
  }

  now() {
    this.time = (this.time || 0) + 1;
    return this.time;
  }
}
