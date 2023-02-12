export const PASSWORD_LENGTH = 8;

// 1 uppercase, 1 lovercase, 1 number, min 6 in length
// Without special character
// prettier-ignore
export const REGEX_PASSWORD = new RegExp(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{${PASSWORD_LENGTH},}$`);

// With 1 special character
// If you decide to use this one update generatePassword() charset with a few special characters
// export const REGEX_PASSWORD = new RegExp(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{${PASSWORD_LENGTH},}$`);
