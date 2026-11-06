/** Illustrative labor capacity; values are not a cash-savings forecast. */
export function computeRoi({ tasksPerWeek, minutesBefore, minutesAfter, hourlyRate, annualToolCost, implementationCost }) {
  const inputs = { tasksPerWeek, minutesBefore, minutesAfter, hourlyRate, annualToolCost, implementationCost };
  for (const [name, value] of Object.entries(inputs)) {
    if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
      throw new RangeError(`${name} must be a finite, non-negative number.`);
    }
  }
  const weeklyHours = tasksPerWeek * Math.max(0, minutesBefore - minutesAfter) / 60;
  const annualCapacityValue = weeklyHours * hourlyRate * 52;
  const firstYearNet = annualCapacityValue - annualToolCost - implementationCost;
  const monthlyNet = (annualCapacityValue - annualToolCost) / 12;
  const paybackMonths = monthlyNet > 0 ? implementationCost / monthlyNet : null;
  if (![weeklyHours, annualCapacityValue, firstYearNet, monthlyNet].every(Number.isFinite) || (paybackMonths !== null && !Number.isFinite(paybackMonths))) {
    throw new RangeError('Inputs exceed the supported calculation range.');
  }
  return { weeklyHours, annualCapacityValue, firstYearNet, paybackMonths };
}
