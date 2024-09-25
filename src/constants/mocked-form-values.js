export const mockedPeople = [
    {
        id: 1,
        firstName: "Bruce",
        lastName: "Wayne",
        gender: "Man",
        qualification: "Senior",
        phoneNumber: "123456789",
        email: "batman@test.test",
        comment: "i`m not Batman",
        employment: ['Part-time'],
    },
    {
        id: 2,
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "Woman",
        qualification: "Middle",
        phoneNumber: "987654321",
        email: "b_widow@test.test",
        comment: "i`m not Spy Black Widow",
        employment: ['Part-time', 'Full-time', 'Over-time'],
    },
];

export const defaultValues = {
    email: "",
    gender: "",
    comment: "",
    lastName: "",
    firstName: "",
    employment: [],
    phoneNumber: "",
    qualification: "",
};

export const validationSchemas= {
    REQUIRED: {
        required: "Field is required"
    },
    MIN_LENGTH: {
        minLength: {
            value: 3,
            message: "Please enter a minimum of 3 characters"
        }
    },
    MAX_LENGTH_NUMBER: {
        maxLength: {
            value: 10,
            message: "This input exceed max Length."
        }
    },
    EMAIL: {
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "Please enter a valid email address"
        }
    },
    NUMBER: {
        pattern: {
            value: /^(0|[1-9]\d*)(\.\d+)?$/,
            message: "This input is number only."
        },
    },
    MAX_LENGTH_COMMENT: {
        maxLength: {
            value: 256,
            message: "This input exceed max Length 256 characters."
        }
    },
};
