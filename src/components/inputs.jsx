
import {ErrorMessage} from "@hookform/error-message";

export const Input =  ({ fieldName, label, register, errors, required, type, validationSchema, isTextArea, ...attr }) => {
    if (isTextArea) {
        return <>
            <label htmlFor={fieldName}>
                {label}{required && <span className='required'>*</span>}
            </label>
            <textarea
                {...register(fieldName, validationSchema)}
                name={fieldName}
                id={fieldName}
                {...attr}
            />
            <ErrorMessage errors={errors} name={fieldName} render={({message}) => <p>{message}</p>}/>
        </>
    }
    return <>
        <label htmlFor={fieldName}>
            {label}{required && <span className='required'>*</span>}
        </label>
        <input
            {...register(fieldName, validationSchema)}
            name={fieldName}
            id={fieldName}
            type={type}
            {...attr}
        />
        <ErrorMessage errors={errors} name={fieldName} render={({message}) => <p>{message}</p>}/>
    </>
};

export const RadioInput =  ({ fieldName, register, title, values, ...attr }) => {
    return <div className='radio-input'>
        <span>{title}</span>
        {values.map(value => <label key={value}>
                <input {...register(fieldName)} type="radio" value={value} {...attr}/>
                {value}
            </label>
        )}
    </div>

}

export const GroupCheckbox =  ({ fieldName, register, title, values, ...attr }) => {
    return <>
        <span>{title}</span>
        {values.map(value => <div key={value} className='checkbox-container'>
            <input {...register(fieldName)} id={value} type="checkbox" value={value} {...attr}/>
            <label htmlFor={value}>{value}</label>
        </div>)}
    </>
}

export const SimpleSelect =  ({ fieldName, register, title, values, defaultValue }) => {
    return <>
        <label>
            {title}
            <select {...register(fieldName)}>
                <option value="">{defaultValue}</option>
                {values.map(value => <option key={value} value={value}>{value}</option>)}
            </select>
        </label>
    </>
}
