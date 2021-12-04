import * as Yup from "yup";



export const genders = ["Male", "Female"];

export const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
];
export const passionsOptions = [
    { value: "self-care", label: "Self-care" },
    { value: "walking", label: "Walking" },
    { value: "sports", label: "Sports" },
    { value: "foodie", label: "Foodie" },
    { value: "working out", label: "Working out" },
    { value: "grab a drink", label: "Grab a drink" },
    { value: "disney", label: "Disney" },
    { value: "reading", label: "Reading" },
    { value: "videogames", label: "Videogames" },
    { value: "programming", label: "Programming" },
    { value: "animals", label: "Animals" },
    { value: "spirituality", label: "Spirituality" },
    { value: "politics", label: "Politics" },
    { value: "movies", label: "Movies" },
    { value: "vlogging", label: "Vlogging" },
    { value: "spirituality", label: "Spirituality" },
];

export const userValidation = Yup.object().shape({
    gender: Yup.string().required("Required"),
    birthday: Yup.date().required("Required"),
    max_rent: Yup.number().required('Required'),
    passions: Yup.array()
        .required("Required")
        .min(3, "At least 3 passion required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    preferenced_gender: Yup.string().required("Required"),
    minAgeRange: Yup.number()
        .required("Required")
        .positive("Should be a positive number")
        .integer("Should be an integer number")
        .max(100, "Too old"),

    maxAgeRange: Yup.number()
        .required("Required")
        .positive("Should be a positive number")
        .integer("Should be an integer number")
        .moreThan(
            Yup.ref("minAgeRange"),
            "Maximum age should be greated than minimum age"
        )
        .max(100, "Too old"),
});

export const ownerValidation = Yup.object().shape({
    gender: Yup.string().required("Required"),
    birthday: Yup.date().required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    preferenced_gender: Yup.string().required("Required"),
    minAgeRange: Yup.number()
        .required("Required")
        .positive("Should be a positive number")
        .integer("Should be an integer number")
        .max(100, "Too old"),
    maxAgeRange: Yup.number()
        .required("Required")
        .positive("Should be a positive number")
        .integer("Should be an integer number")
        .moreThan(
            Yup.ref("minAgeRange"),
            "Maximum age should be greated than minimum age"
        )
        .max(100, "Too old"),
});