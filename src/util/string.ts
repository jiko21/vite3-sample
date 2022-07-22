const EMPTY_PATTERN = /^[\s|  |	]+$/

export const isEmpty = (input: string) => EMPTY_PATTERN.test(input) || input.length === 0;
