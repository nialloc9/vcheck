/* global expect */

import {
    validatePhoneNumber,
    validateRequired,
    validateMaxLength,
    validateNumber,
    validateMinValue,
    validateMaxValue,
    validateEmail,
    validateRequiredCountry,
    validateRequiredNumber,
    validateRequiredName,
    validateRequiredLastName,
    validateRequiredAddress,
    validateRequiredPostCode,
    validateAcceptedTerms,
    validateRequiredEmail,
    validateRequiredPassword,
    validateRequiredPasswordConfirmation,
    validateRequiredDay,
    validateRequiredTime,
    validateTelephoneNumber,
    validateDomain,
    validateSpecialChars
} from "../src";

describe("validateRequired test suite", () => {
    it("should return error message when value is not present", () => {
        expect(validateRequired()).toBe("Required");
    });

    it("should return undefined when value is present", () => {
        expect(validateRequired(1234456789)).toBe(undefined);
    });
});

describe("validateMaxLength test suite", () => {
    it("should return error message when value is not present", () => {
        expect(validateMaxLength(10)("1234567891011")).toBe("Must be 10 characters or less");
    });

    it("should return undefined when value is present", () => {
        expect(validateMaxLength(10)("1")).toBe(undefined);
    });
});

describe("validateNumber test suite", () => {
    it("should return error message when value is not a number", () => {
        expect(validateNumber("test")).toBe("Must be a number");
    });

    it("should return undefined when value is present", () => {
        expect(validateNumber(10)).toBe(undefined);
    });
});

describe("validateMinValue test suite", () => {
    it("should return error message when value is not a number", () => {
        expect(validateMinValue(10)(1)).toBe("Must be at least 10");
    });

    it("should return undefined when value is greater than min value", () => {
        expect(validateMinValue(10)(11)).toBe(undefined);
    });
});

describe("validateMaxValue test suite", () => {
    it("should return error message when value is greater than 10", () => {
        expect(validateMaxValue(10)(11)).toBe("Must be at most 10");
    });

    it("should return undefined when value is less than max value", () => {
        expect(validateMaxValue(10)(1)).toBe(undefined);
    });
});

describe("validateEmail test suite", () => {
    it("should return error message when value is not an email", () => {
        expect(validateEmail("test")).toBe("Invalid email address");
    });

    it("should return undefined when value is less than max value", () => {
        expect(validateEmail("test@test.com")).toBe(undefined);
    });
});

describe("validateRequiredCountry test suite", () => {
    it("should return error message when country is not defined", () => {
        expect(validateRequiredCountry()).toBe("Please enter a country.");
    });

    it("should return undefined when country is defined", () => {
        expect(validateRequiredCountry("test")).toBe(undefined);
    });
});

describe("validateRequiredNumber test suite", () => {
    it("should return error message when number is not defined", () => {
        expect(validateRequiredNumber()).toBe("Please enter your number.");
    });

    it("should return undefined when number is defined", () => {
        expect(validateRequiredNumber(123)).toBe(undefined);
    });
});

describe("validateRequiredName test suite", () => {
    it("should return error message when name is not defined", () => {
        expect(validateRequiredName()).toBe("Please enter first name.");
    });

    it("should return undefined when name is defined", () => {
        expect(validateRequiredName("name")).toBe(undefined);
    });
});

describe("validateRequiredLastName test suite", () => {
    it("should return error message when name is not defined", () => {
        expect(validateRequiredLastName()).toBe("Please enter last name.");
    });

    it("should return undefined when name is defined", () => {
        expect(validateRequiredLastName("name")).toBe(undefined);
    });
});

describe("validateRequiredAddress test suite", () => {
    it("should return error message when address is not defined", () => {
        expect(validateRequiredAddress()).toBe("Please enter your address.");
    });

    it("should return undefined when address is defined", () => {
        expect(validateRequiredAddress("address")).toBe(undefined);
    });
});

describe("validateRequiredPostCode test suite", () => {
    it("should return error message when post code is not defined", () => {
        expect(validateRequiredPostCode()).toBe("Please enter your postcode.");
    });

    it("should return undefined when post code is defined", () => {
        expect(validateRequiredPostCode("apost")).toBe(undefined);
    });
});

describe("validateAcceptedTerms test suite", () => {
    it("should return error message when post code is not defined", () => {
        expect(validateAcceptedTerms()).toBe("Please accept terms & conditions.");
    });

    it("should return undefined when post code is defined", () => {
        expect(validateAcceptedTerms("apost")).toBe(undefined);
    });
});

describe("validateRequiredEmail test suite", () => {
    it("should return error message when email is not defined", () => {
        expect(validateRequiredEmail()).toBe("Please enter an email address.");
    });

    it("should return undefined when email is defined", () => {
        expect(validateRequiredEmail("email")).toBe(undefined);
    });
});

describe("validateRequiredPassword test suite", () => {
    it("should return error message when password is not defined", () => {
        expect(validateRequiredPassword()).toBe("Please enter a password.");
    });

    it("should return undefined when password is defined", () => {
        expect(validateRequiredPassword("password")).toBe(undefined);
    });
});

describe("validateRequiredPasswordConfirmation test suite", () => {
    it("should return error message when password confirm is not defined", () => {
        expect(validateRequiredPasswordConfirmation()).toBe("Please confirm password.");
    });

    it("should return undefined when password confirm is defined", () => {
        expect(validateRequiredPasswordConfirmation("password confirmation")).toBe(undefined);
    });
});

describe("validateRequiredDay test suite", () => {
    it("should return error message when day is not defined", () => {
        expect(validateRequiredDay()).toBe("The day field is required.");
    });

    it("should return undefined when day is defined", () => {
        expect(validateRequiredDay("day")).toBe(undefined);
    });
});

describe("validateRequiredTime test suite", () => {
    it("should return error message when time is not defined", () => {
        expect(validateRequiredTime()).toBe("The time field is required.");
    });

    it("should return undefined when time is defined", () => {
        expect(validateRequiredTime("day")).toBe(undefined);
    });
});

describe("validateTelephoneNumber test suite", () => {
    it("should return error message when number is not telephone number", () => {
        expect(validateTelephoneNumber("test")).toBe("Invalid phone number");
    });

    it("should return undefined when number is telephone number", () => {
        expect(validateTelephoneNumber("+44753733377")).toBe(undefined);
    });
});

describe("validateDomain test suite", () => {
    it("should return error message when domain is invalid", () => {
        expect(validateDomain('-example.co.uk')).toBe("Invalid domain");
    });

    it("should return undefined when domain is valid", () => {
        expect(validateDomain("test.com")).toBe(undefined);
    });
});

describe("validateSpecialChars test suite", () => {
    it("should return error message when text is invalid", () => {
        expect(validateSpecialChars('is this a question?')).toBe("Special characters not allowed");
    });

    it("should return undefined when text is valid", () => {
        expect(validateSpecialChars("is this a question")).toBe(undefined);
    });
});