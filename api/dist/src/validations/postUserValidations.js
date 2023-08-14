"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postUserValidation = (name, lastName, document, email, password, address, image, country, city, state) => {
    if (!name)
        return "Name is required";
    const nameRegex = /^[a-zA-Z\s']+$/;
    if (!nameRegex.test(name)) {
        return "Invalid name format. Only letters, spaces, and apostrophes are allowed.";
    }
    if (!lastName)
        return "lastName is required";
    const lastNameRegex = /^[A-Za-z\-']+$/;
    if (!lastNameRegex.test(lastName)) {
        return "lastName must contain only letters";
    }
    if (typeof document === "undefined")
        return "document is required";
    if (!email)
        return "email is required";
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        return "Invalid email format.";
    }
    if (!password)
        return "password is required";
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        return "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit.";
    }
    if (!address)
        return "address is required";
    const addressRegex = /^[a-zA-Z0-9\s\-,']+$/;
    if (!addressRegex.test(address)) {
        return "Invalid address format.";
    }
    if (!country)
        return "Country is required";
    const countryRegex = /^[a-zA-Z\s\-']+$/;
    if (!countryRegex.test(country)) {
        return "Invalid country name format.";
    }
    if (!city)
        return "City is required";
    const cityRegex = /^[a-zA-Z\s\-']+$/;
    if (!cityRegex.test(city)) {
        return "Invalid city name format.";
    }
    if (!state)
        return "City is required";
    const stateRegex = /^[a-zA-Z\s\-']+$/;
    if (!stateRegex.test(state)) {
        return "Invalid city name format.";
    }
    return null;
};
exports.default = postUserValidation;
//# sourceMappingURL=postUserValidations.js.map