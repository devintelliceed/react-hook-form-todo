
import { useEffect, memo } from 'react';
import { useForm } from "react-hook-form";

import { validationSchemas } from "../constants/mocked-form-values.js";
import {GroupCheckbox, Input, RadioInput, SimpleSelect} from "../components/inputs.jsx";


const UserForm = memo( function UserForm({ formValues, handleSubmitForm }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors}
    } = useForm({ defaultValues: formValues});

    useEffect(() => {
        reset(formValues);
    }, [formValues, reset]);

    const onSubmit = (data) => {
        handleSubmitForm(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <header>
                <h2>React-Hook-Form</h2>
                <span>Please fill the form fields</span>
            </header>
            <Input
                required
                type="text"
                errors={errors}
                label="First Name:"
                register={register}
                fieldName="firstName"
                placeholder="First name"
                validationSchema={validationSchemas.REQUIRED}
            />
            <Input
                required
                type="text"
                errors={errors}
                label="Last Name:"
                register={register}
                fieldName="lastName"
                placeholder="Last name"
                validationSchema={{...validationSchemas.REQUIRED, ...validationSchemas.MIN_LENGTH}}
            />
            <RadioInput
                title="I am:"
                fieldName="gender"
                register={register}
                values={['Man', 'Woman']}
            />
            <Input
                required
                type="email"
                label="Email:"
                errors={errors}
                fieldName="email"
                placeholder="Email"
                register={register}
                validationSchema={{...validationSchemas.REQUIRED, ...validationSchemas.EMAIL}}
            />
            <Input
                type="number"
                errors={errors}
                register={register}
                label="Phone Number:"
                fieldName="phoneNumber"
                placeholder="Phone Number"
                validationSchema={{...validationSchemas.NUMBER, ...validationSchemas.MAX_LENGTH_NUMBER}}
            />
            <SimpleSelect
                register={register}
                title="Qualification:"
                fieldName="qualification"
                defaultValue="Select your level..."
                values={["Junior", "Middle", "Senior"]}
            />

            <GroupCheckbox
                register={register}
                fieldName="employment"
                title="Type of employment:"
                values={['Part-time', 'Full-time', 'Over-time']}
            />
            <Input
                isTextArea
                errors={errors}
                label="Comment:"
                fieldName="comment"
                register={register}
                placeholder="Type your comment here..."
                validationSchema={{ ...validationSchemas.MAX_LENGTH_COMMENT}}
            />
            <button type='submit'><strong>Submit</strong></button>
        </form>
    );
});

export default UserForm;
