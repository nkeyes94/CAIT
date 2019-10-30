export const validateRegister = (state) => {
  let validation = {
    isValid: true
  }
  const { password, firstName, lastName, email, confirmPassword } = state
  if (!password || !firstName || !lastName || !email || !confirmPassword) {
    validation.isValid = false
    validation.message = 'All Fields must be filled in.'
  } else if (password !== confirmPassword) {
    validation.isValid = false
    validation.message = 'Both Password Fields Should Match.'
  } else if (email.indexOf('@') === -1 || email.indexOf('@') === 0) {
    validation.isValid = false
    validation.message = 'Please Enter a Valid Email.'
  }
  
  return validation
}