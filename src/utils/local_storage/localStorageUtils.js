export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage  = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export const updateLocalStorage = (key, newData) => {
    let existingData = getFromLocalStorage(key);

    if (!existingData) {
        existingData = {};
    }
    const updatedData = {
        ...existingData,
        ...newData
    };

    removeFromLocalStorage(key);
    saveToLocalStorage(key, updatedData);
}