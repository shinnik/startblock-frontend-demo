export const updateList = (list, index, value) => {
    const tmp = list;
    list[index] = value;
    return tmp;
};
