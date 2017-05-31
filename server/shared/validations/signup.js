import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {
    let errors = {}
    
    if(Validator.isEmpty(data.username + '')) {
        errors.username = 'Field is requied!'
    }
    if(!Validator.isEmail(data.email + '')) {
        errors.email = 'Email is invalid'
    }
    if(Validator.isEmpty(data.email + '')) {
        errors.email = 'Field is requied!'
    }
    if(Validator.isEmpty(data.password + '')) {
        errors.password = 'Field is requied!'
    }
    if(Validator.isEmpty(data.passwordConfirm + '')) {
        errors.passwordConfirm = 'Field is requied!'
    }
    if(!Validator.equals(data.password + '', data.passwordConfirm + '')) {
        errors.passwordConfirm = 'Passwords must match'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}