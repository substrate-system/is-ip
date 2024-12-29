import { test } from '@substrate-system/tapzero'
import { isIP } from '../src/index.js'

/**
 * @see https://nodejs.org/api/net.html#netisipinput
 */

test('is IP address?', async t => {
    t.plan(5)
    t.equal(isIP('::1'), 6)
    t.equal(isIP('127.0.0.1'), 4)
    t.equal(isIP('127.000.000.001'), 0)
    t.equal(isIP('127.0.0.1/24'), 0)
    t.equal(isIP('fhqwhgads'), 0)
})
