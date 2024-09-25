
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function UserForm({ formValues, handleSubmitForm }) {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors}
    } = useForm({
    defaultValues: formValues,
});

    useEffect(() => {
        reset(formValues);
    }, [formValues, formValues]);

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
            <label>
                First Name:<span className='required'>*</span>
                <input
                    placeholder="First name"
                    {...register("firstName", {required: "This field is required"})}
                />
            </label>
            <ErrorMessage errors={errors} name="firstName" render={({message}) => <p>{message}</p>}/>

            <label>
                Last Name:<span className='required'>*</span>
                <input
                    placeholder="Last name"
                    {...register("lastName", {
                        minLength: {
                            value: 5,
                            message: "Last name should be at least 5 characters long"
                        },
                        required: "This field is required",
                    })}
                />
            </label>
            <ErrorMessage errors={errors} name="lastName" render={({message}) => <p>{message}</p>}/>
            <div className='radio-input'>
                <span>I am:</span>
                <label>
                    <input {...register("gender")} type="radio" value="Woman"/>Woman
                </label>
                <label>
                    <input {...register("gender")} type="radio" value="Man"/>Man
                </label>
            </div>
            <label>
                Email:<span className='required'>*</span>
                <input
                    type='email'
                    placeholder="Email"
                    {...register("email", {
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: "Please enter a valid email address"
                        },
                        required: "This field is required",
                    })}
                />
            </label>
            <ErrorMessage errors={errors} name="email" render={({message}) => <p>{message}</p>}/>
            <label>
                Phone Number:<span className='required'>*</span>
                <input
                    type='number'
                    placeholder="Phone Number"
                    {...register("phoneNumber", {
                        required: "This field is required.",
                        pattern: {
                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                            message: "This input is number only."
                        },
                        maxLength: {
                            value: 10,
                            message: "This input exceed max Length."
                        }
                    })}
                />
            </label>
            <ErrorMessage errors={errors} name="phoneNumber" render={({message}) => <p>{message}</p>}/>
            <label>
                Qualification:
                <select {...register("qualification")}>
                    <option value="">Select your level...</option>
                    <option value="Junior">Junior</option>
                    <option value="Middle">Middle</option>
                    <option value="Senior">Senior</option>
                </select>
            </label>
            <span>Type of employment:</span>
            <div className='checkbox-container'>
                <input {...register("employment")} id="Part-time" type="checkbox" value="Part-time"/>
                <label htmlFor="Part-time">Part-time</label>
            </div>
            <div className='checkbox-container'>
                <input {...register("employment")} id="Full-time" type="checkbox" value="Full-time"/>
                <label htmlFor="Full-time">Full-time</label>
            </div>
            <div className='checkbox-container'>
                <input {...register("employment")} id="Over-time" type="checkbox" value="Over-time"/>
                <label htmlFor="Over-time">Over-time</label>
            </div>

            <label>
                Comment:
                <textarea
                    {...register("comment", {maxLength: 200})}
                    placeholder="Type your comment here..."
                />
            </label>
            <button type='submit'><strong>Submit</strong></button>
            {/*<input type="submit"/>*/}
        </form>
    );
}
