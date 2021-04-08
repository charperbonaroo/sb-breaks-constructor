import * as React from 'react'
import { Time } from './Time'

export function Now() {
  return <code>{new Time(9000).now()}</code>
}
