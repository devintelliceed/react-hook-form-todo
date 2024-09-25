
import _ from 'lodash';

export default function UserList({ list, handleSetValues, handleRemove }) {

    return _.isEmpty(list)
        ? <header><h2>You have no applicant</h2></header>
        : <div>
            <header><h2>You have {list.length} applicants</h2></header>
            {list.map(applicant => <User applicant={applicant} key={applicant.id} handleSetValues={handleSetValues} handleRemove={handleRemove} />)}
        </div>
};

const User = ({ applicant, handleSetValues, handleRemove }) => {
    let title;
    if (applicant.gender) {
        title = applicant.gender === "Man" ? "Mr." : "Mrs.";
    }

    const handleEdit = () => handleSetValues(applicant);
    const remove = () => handleRemove(applicant);

    return <>
        <div className="user-list">
            <div>
                <span>Name: <big>{title} {applicant.firstName} {applicant.lastName}</big> </span><br/>
                <span>Email: <big>{applicant.email}</big> </span>
                <span>Phone: <big>{applicant.phoneNumber}</big> </span> <br/>
                {applicant.qualification && <span>Qualification: <big>{applicant.qualification}</big> </span>}<br/>
                {!_.isEmpty(applicant.employment) && <>
                    <span>Employment type: <big>{applicant.employment.join(' ')}</big></span><br/>
                </>}
                {applicant.comment && <span>Comment: <big>{applicant.comment}</big> </span>}
            </div>
            <div className="user-buttons">
                <button type='button' onClick={handleEdit}><big>Edit</big></button>
                <button onClick={remove}><span className='required'>DELETE</span></button>
            </div>
        </div>
        <hr/>
    </>
}
