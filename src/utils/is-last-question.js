export function isLastQuestion(amount, currentIndex) {
  if (currentIndex + 1 === amount) {
    return true;
  } else {
    return false;
  }
}
