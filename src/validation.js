import { isNumber, isNull } from "lodash";

/**
 * @description validates whether a value is is present
 * @param {{string}} value - value
 * @param {{string, number}} message - message
 * @returns {string | undefined}
 */
const required = (value = null, message = "Required") =>
    !isNull(value) && value !== "" && value ? undefined : message;

/**
 * @description validates whether a value is is present
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequired = value => required(value);

/**
 * @description validates a phone number is 11 digits
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validatePhoneNumber = value =>
    value && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value) // eslint-disable-line no-useless-escape
        ? "Invalid phone number"
        : undefined;

/**
 * @description public validates whether a value less than a max number
 * @param {{number}} max - value
 * @returns {string | undefined}
 */
export const validateMaxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

/**
 * @description public validates whether a value more than a min number
 * @param {{number}} min - value
 * @returns {string | undefined}
 */
export const validateMinLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

/**
 * @description validates if a value is a number
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateNumber = value => (!isNumber(value) ? "Must be a number" : undefined);

/**
 * @description validates whether an number is greater than min
 * @param {{number}} min - value
 * @returns {string | undefined}
 */
export const validateMinValue = min => value => (value && value < min ? `Must be at least ${min}` : undefined);

/**
 * @description validates whether an email has been entered
 * @param {{number}} max - value
 * @returns {string | undefined}
 */
export const validateMaxValue = max => value => (value && value > max ? `Must be at most ${max}` : undefined);

/**
 * @description validates whether a valid email has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;

/**
 * @description validates whether a country has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredCountry = value => required(value, "Please enter a country.");

/**
 * @description validates whether a number has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredNumber = value => required(value, "Please enter your number.");

/**
 * @description validates whether a name has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredName = value => required(value, "Please enter first name.");

/**
 * @description validates whether a last name has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredLastName = value => required(value, "Please enter last name.");

/**
 * @description validates whether an address has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredAddress = value => required(value, "Please enter your address.");

/**
 * @description validates whether an pst code has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredPostCode = value => required(value, "Please enter your postcode.");

/**
 * @description validates whether terms have been accepted
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateAcceptedTerms = value => required(value, "Please accept terms & conditions.");

/**
 * @description validates if email is present
 * @param {string} value
 * @returns {string | undefined}
 */
export const validateRequiredEmail = value => required(value, "Please enter an email address.");

/**
 * @description validates whether a password has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredPassword = value => required(value, "Please enter a password.");

/**
 * @description validates whether a password confirmation has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredPasswordConfirmation = value => required(value, "Please confirm password.");

/**
 * @description validates whether a day has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredDay = value => required(value, "The day field is required.");

/**
 * @description validates whether a time has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredTime = value => required(value, "The time field is required.");

/**
 * @description validates whether a correct telephone number has been entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateTelephoneNumber = value =>
    value && !/^\(?(0|(\+)?44)( *\d\)?){9,10}$/i.test(value) ? "Invalid phone number" : undefined;

/**
 * @description validates whether a valid message is entered
 * @param {{string}} value - value
 * @returns {string | undefined}
 */
export const validateRequiredMessage = value => required(value, "Please enter a message.");

/**
 * @description returns an error if one is found by validators
 * @param {[func]} validators
 * @param {*} value
 */
export const pipeline = (validators, value) => {
    const result = validators.reduce(
        (result, validator) => {
            if (result.error) return result;

            const error = validator(result.value);

            if (error) {
                result.error = error;
            }

            return result;
        },
        { value, error: undefined }
    );

    return result.error;
};
