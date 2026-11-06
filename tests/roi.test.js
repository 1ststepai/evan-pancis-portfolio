import test from 'node:test';
import assert from 'node:assert/strict';
import { computeRoi } from '../js/roi.js';

const sample = { tasksPerWeek: 100, minutesBefore: 15, minutesAfter: 6, hourlyRate: 40, annualToolCost: 1200, implementationCost: 3000 };

test('sample scenario follows the approved capacity and payback formulas', () => {
  assert.deepEqual(computeRoi(sample), { weeklyHours: 15, annualCapacityValue: 31200, firstYearNet: 27000, paybackMonths: 1.2 });
});
test('equal or slower workflows release no capacity and cannot pay back', () => {
  for (const minutesAfter of [15, 25]) {
    assert.deepEqual(computeRoi({ ...sample, minutesAfter }), { weeklyHours: 0, annualCapacityValue: 0, firstYearNet: -4200, paybackMonths: null });
  }
});
test('zero or negative monthly net returns null payback, including zero setup cost', () => {
  for (const annualToolCost of [31200, 40000]) {
    for (const implementationCost of [0, 3000]) {
      assert.equal(computeRoi({ ...sample, annualToolCost, implementationCost }).paybackMonths, null);
    }
  }
});
test('a free implementation pays back immediately only when monthly net is positive', () => {
  assert.equal(computeRoi({ ...sample, implementationCost: 0 }).paybackMonths, 0);
});
test('zero tasks or hourly rate retain costs and do not create capacity value', () => {
  for (const override of [{ tasksPerWeek: 0 }, { hourlyRate: 0 }]) {
    const result = computeRoi({ ...sample, ...override });
    assert.equal(result.annualCapacityValue, 0);
    assert.equal(result.firstYearNet, -4200);
    assert.equal(result.paybackMonths, null);
  }
});
test('fractional time and money retain precision until presentation', () => {
  const result = computeRoi({ tasksPerWeek: 7, minutesBefore: 2.5, minutesAfter: 0.5, hourlyRate: 30.25, annualToolCost: 12.5, implementationCost: 42.75 });
  assert.equal(result.weeklyHours, 14 / 60);
  assert.equal(result.annualCapacityValue, (14 / 60) * 30.25 * 52);
  assert.equal(result.firstYearNet, result.annualCapacityValue - 55.25);
  assert.equal(result.paybackMonths, 42.75 / ((result.annualCapacityValue - 12.5) / 12));
});
test('invalid numbers, negative values, and absent fields fail at the calculation boundary', () => {
  for (const field of Object.keys(sample)) {
    for (const value of [-1, NaN, Infinity, -Infinity, '100', null, undefined]) {
      assert.throws(() => computeRoi({ ...sample, [field]: value }), RangeError);
    }
  }
});
test('overflow is rejected instead of showing infinite money or payback', () => {
  assert.throws(() => computeRoi({ ...sample, tasksPerWeek: Number.MAX_VALUE }), RangeError);
});
