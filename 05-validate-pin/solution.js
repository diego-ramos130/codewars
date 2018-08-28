function validatePin(num) {
  return /^\d{4}(?:\d{2})?$/.test(num);
}