const EMPTY_PATTERN = /^[\s|  |	]+$/

export const isEmpty = (input: string) => {
  return EMPTY_PATTERN.test(input) || input === '';
};
