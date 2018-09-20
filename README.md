![VCheck logo](assets/logo.png?raw=true | width=100)

# vcheck

A validator library for common use cases.

### Latest stable release

- 1.0.4

### Usage

- install package

        $ npm i --save @nialloc9/vcheck

* import package
  import { validateRequired } from 'nialloc9@vcheck';
* use on it's own and call function

        const error = validateRequired(myValue);

        if(error) throw new Error(error);

* or easily integrate with redux-form package

        import { validateRequired } from 'nialloc9/vcheck';
        import { Field } from 'redux-form';

        <Field
        name="name"
        size="small"
        type="text"
        component="input"
        validate={validateRequired}

  />

### Methods

- All methods return an error message if value is not correct. Or undefined if valid value passed.

* @description validates whether a password confirmation has been entered
* @param {{string}} value - value
* @returns {string | undefined}

        validateRequired(myValue)

- @description validates a phone number is 11 digits
- @param {{string}} value - value
- @returns {string | undefined}

        validatePhoneNumber(myValue)

* @description public validates whether a value less than a max number
* @param {{number}} max - value
* @returns {string | undefined}

        const maxLength8 = validateMaxLength(8)

        maxLength8(myValue);

- @description public validates whether a value more than a min length
- @param {{number}} min - value
- @returns {string | undefined}

        const minLength3 = validateMinLength(3);

        minLength3(myValue);

- @description validates if a value is a number
- @param {{string}} value - value
- @returns {string | undefined}

        validateNumber(myValue);

* @description validates whether an number is greater than min
* @param {{number}} min - value
* @returns {string | undefined}

        const minValue3 = validateMinValue(3);

        minValue3(myValue);

- @description validates whether an email has been entered
- @param {{number}} max - value
- @returns {string | undefined}

        const maxValue10 = validateMaxValue(10);

        maxValue10(myValue);

- @description validates whether a valid email has been entered
- @param {{string}} value - value
- @returns {string | undefined}

        validateEmail(myValue)

* @description validates whether a country has been entered
* @param {{string}} value - value
* @returns {string | undefined}

        validateRequiredCountry(myValue);

- @description validates whether a number has been entered
- @param {{string}} value - value
- @returns {string | undefined}

        validateRequiredNumber(myValue);

* @description validates whether a name has been entered
* @param {{string}} value - value
* @returns {string | undefined}

        validateRequiredName(myValue);

- @description validates whether a last name has been entered
- @param {{string}} value - value
- @returns {string | undefined}

        validateRequiredLastName(myValue);

* @description validates whether an address has been entered
* @param {{string}} value - value
* @returns {string | undefined}

        validateRequiredAddress(myValue);

- @description validates whether an pst code has been entered
- @param {{string}} value - value
- @returns {string | undefined}

         validateRequiredPostCode(myValue);

* @description validates whether terms have been accepted
* @param {{string}} value - value
* @returns {string | undefined}

        validateAcceptedTerms(myValue);

- @description validates if email is present
- @param {string} value
- @returns {string | undefined}

         validateRequiredEmail(myValue);

* @description validates whether a password has been entered
* @param {{string}} value - value
* @returns {string | undefined}

        validateRequiredPassword(myValue);

- @description validates whether a password confirmation has been entered
- @param {{string}} value - value
- @returns {string | undefined}

        validateRequiredPasswordConfirmation(myValue);

* @description validates whether a day has been entered
* @param {{string}} value - value
* @returns {string | undefined}

         validateRequiredDay(myValue);

- @description validates whether a time has been entered
- @param {{string}} value - value
- @returns {string | undefined}

         validateRequiredTime(myValue);

* @description validates whether a correct telephone number has been entered
* @param {{string}} value - value
* @returns {string | undefined}

         validateTelephoneNumber(myValue);

- @description validates whether a valid message is entered
- @param {{string}} value - value
- @returns {string | undefined}

         validateRequiredMessage(myValue);

### Testing

- Run the tests
  $ npm run test

### Contributing

    Contributions are always welcome. Just open a PR.
