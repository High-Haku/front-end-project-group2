

const Validation = (values) => {
    let errors= {};

    if(!values.username){
        errors.username="Username is required."
    }

    if(!values.email){
        errors.email="email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email='Email is invalid, Please use real email.'
    }
    
    if(!values.password){
        errors.password="password is required"
    } else if(values.password.length <5){
        errors.password="Password must have more than five characters."
    }

    return errors;
}

export default Validation