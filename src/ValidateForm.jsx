export const validateField = (name, value, setErrors) => {
    let error = '';
  
    switch (name) {
      case 'name':
        if (value.trim() === '') {
          error = 'Name is required';
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email is invalid';
        }
        break;
      case 'phone':
        if (!/^\d{11}$/.test(value)) {
          error = 'Phone number must be 11 digits';
        }
        break;
      case 'date':
        if (!value) {
          error = 'Date is required';
        }
        break;
      default:
        break;
    }
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  };
  
  export const validateForm = (formData) => {
    const { name, email, phone, date } = formData;
    const validationErrors = {};
  
    if (name.trim() === '') validationErrors.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(email)) validationErrors.email = 'Email is invalid';
    if (!/^\d{11}$/.test(phone)) validationErrors.phone = 'Phone number must be 11 digits';
    if (!date) validationErrors.date = 'Date is required';
  
    return validationErrors;
  };
  