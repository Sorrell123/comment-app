export const isEmail = (text: string) => (
  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(text)
);

export const isAlphabetic = (text: string) => /^[A-Z]+$/i.test(text)