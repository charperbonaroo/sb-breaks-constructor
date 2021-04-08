import * as React from 'react'

class Time {
  constructor(private time = 0) {
  }

  now() {
    this.time = (this.time || 0) + 1;
    return this.time;
  }
}


export function Now() {
  return <code>{new Time(9000).now()}</code>
}
