import { computeRoi } from './roi.js';

const form = document.querySelector('#roi-form');
const inputs = [...form.querySelectorAll('input')];
const error = document.querySelector('#roi-error');
const outputs = ['weeklyHours', 'annualCapacityValue', 'firstYearNet', 'paybackMonths'];
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });

function updateRoi() {
  const invalid = inputs.filter(input => !input.validity.valid);
  for (const input of inputs) {
    input.setAttribute('aria-invalid', String(invalid.includes(input)));
    if (invalid.includes(input)) input.setAttribute('aria-describedby', 'roi-error');
    else input.removeAttribute('aria-describedby');
  }
  error.hidden = invalid.length === 0;
  if (invalid.length) {
    error.textContent = 'Enter a number of 0 or more in every field (whole tasks only). Workflow inputs: maximum 1,000,000; costs: maximum $1,000,000,000.';
    for (const id of outputs) document.getElementById(id).textContent = '—';
    document.querySelector('#roi-note').textContent = 'Complete the highlighted inputs to calculate this scenario.';
    return;
  }
  try {
    const result = computeRoi(Object.fromEntries(inputs.map(input => [input.name, input.valueAsNumber])));
    document.querySelector('#weeklyHours').textContent = result.weeklyHours > 0 && result.weeklyHours < 0.1 ? '<0.1' : number.format(result.weeklyHours);
    document.querySelector('#annualCapacityValue').textContent = currency.format(result.annualCapacityValue);
    document.querySelector('#firstYearNet').textContent = currency.format(result.firstYearNet);
    document.querySelector('#paybackMonths').textContent = result.paybackMonths === null ? 'No payback' : result.paybackMonths === 0 ? 'Immediate' : `${result.paybackMonths < 0.1 ? '<0.1' : number.format(result.paybackMonths)} months`;
    document.querySelector('#roi-note').textContent = result.paybackMonths === null ? 'Annual tool cost meets or exceeds annual capacity value. No modeled payback.' : 'Sample assumptions, not measured employer or client results.';
  } catch (exception) {
    error.hidden = false;
    error.textContent = exception.message;
    for (const id of outputs) document.getElementById(id).textContent = '—';
    document.querySelector('#roi-note').textContent = 'Reduce the inputs to calculate this scenario.';
  }
}

form.addEventListener('submit', event => event.preventDefault());
form.addEventListener('input', updateRoi);
// Reset fires before the browser restores the default input values.
form.addEventListener('reset', () => requestAnimationFrame(updateRoi));
updateRoi();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('waiting');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });
  document.documentElement.classList.add('motion-ready');
  for (const element of document.querySelectorAll('.reveal')) {
    // In-view content remains visible; progressively enhance only later sections.
    if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add('waiting');
    observer.observe(element);
  }
}
