const validate = (form) => {
  let errorMessages = {};

  if (!/^[a-zA-Z0-9\s-]+$/.test(form.name)) {
    errorMessages.name = "invalid name";
  } else {
    delete errorMessages.name;
  }

  if (!/^[a-zA-Z0-9\s.,'-]+$/.test(form.description)) {
    errorMessages.description = "invalid description";
  } else {
    delete errorMessages.description;
  }

  return errorMessages;
};

export default validate;
