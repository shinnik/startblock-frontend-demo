export const updateObject = (obj, newFields) => {
    return {
        ...obj,
        ...newFields
    }
};
