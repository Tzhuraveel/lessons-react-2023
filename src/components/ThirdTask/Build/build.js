import './user-one-style.css'
const Build = ({value}) => {
    const {name, email, id, phone} = value
    return (
        <div className='end'>
            <h4>{id}) {name}</h4>
            <h4>{email}</h4>
            <h4>{phone}</h4>
        </div>
    );
};

export {Build};