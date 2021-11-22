import { urls } from "../../helpers/urls";

import { request } from "../../helpers/requests";

const pendingMatches = [
    { id: "4", name: "Tupac Shakur", matchPercentage: 1, gender: "Male", dateOfBirth: new Date() },
    { id: "5", name: "Igor Dodon", matchPercentage: 50, gender: "Male", dateOfBirth: new Date() },
    { id: "6", name: "Francisco Ponchoritoves", matchPercentage: 22, gender: "Male", dateOfBirth: new Date() },
];
const acceptedMatches = [
    { id: "4", name: "Tupac Shakur", matchPercentage: 1, gender: "Male", dateOfBirth: new Date() },
    { id: "5", name: "Igor Dodon", matchPercentage: 50, gender: "Male", dateOfBirth: new Date() },
    { id: "6", name: "Francisco Ponchoritoves", matchPercentage: 22, gender: "Male", dateOfBirth: new Date() },
];
const requestedMatches = [
    { id: "4", name: "Tupac Shakur", matchPercentage: 1, gender: "Male", dateOfBirth: new Date() },
    { id: "6", name: "Francisco Ponchoritoves", matchPercentage: 22, gender: "Male", dateOfBirth: new Date() },
];
const incomingMatches = [
    { id: "4", name: "Tupac Shakur", matchPercentage: 1, gender: "Male", dateOfBirth: new Date() },
    { id: "5", name: "Igor Dodon", matchPercentage: 50, gender: "Male", dateOfBirth: new Date() },
    { id: "6", name: "Francisco Ponchoritoves", matchPercentage: 22, gender: "Male", dateOfBirth: new Date() },
];



export const getPendingMatches = async (values) => {
    try {
        const data = await Promise.resolve(pendingMatches);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};
export const getAcceptedMatches = async (values) => {
    try {
        const data = await Promise.resolve(acceptedMatches);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};

export const getIncomingMatches = async (values) => {
    try {
        const data = await Promise.resolve(incomingMatches);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};
export const getRequestedMatches = async (values) => {
    try {
        const data = await Promise.resolve(requestedMatches);
        return data;
    }
    catch (error) {
        throw Error(error);
    }
};
