export function formatNumberInSingleLetterNotation(input: number): string {
  const suffix = ['', 'K', 'M', 'B', 'T', 'Q'];
  const index = Math.floor(Math.log(input) / Math.log(1000));

  if (input === 0 || input === null) {
    return '0';
  }

  return (Math.floor((input / Math.pow(1000, index)) * 10) / 10).toString() + suffix[index];
}
