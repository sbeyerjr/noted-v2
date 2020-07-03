export const required = value => (value || typeof value === 'number' ? undefined : 'Required');
export const number = value =>
  value && isNaN(Number(value)) ? 'Please Input A Number' : undefined;