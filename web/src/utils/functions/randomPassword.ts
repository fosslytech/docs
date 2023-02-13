import { PASSWORD_LENGTH } from '@utils/constants/auth';

const randomRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const generateRandomPassword = (length: number = PASSWORD_LENGTH) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let pass = '';

  // Get first 2 keys to be 1 uppercase, 1 lowercase
  pass += charset.charAt(randomRange(0, 27)); // 1 lowercase
  pass += charset.charAt(randomRange(27, 53)); // 1 uppercase

  for (var i = 0; i < length - 3; ++i) {
    pass += charset.charAt(randomRange(0, 62));
  }

  // Get last key to be 1 number
  pass += charset.charAt(randomRange(53, 62)); // 1 number

  return pass;
};
