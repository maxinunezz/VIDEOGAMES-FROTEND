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
  if (form.rating > 5 || form.rating < 1) {
    errorMessages.rating = "rating should be a number between 1 and 5";
  } else {
    delete errorMessages.rating;
  }

  return errorMessages;
};

export default validate;
