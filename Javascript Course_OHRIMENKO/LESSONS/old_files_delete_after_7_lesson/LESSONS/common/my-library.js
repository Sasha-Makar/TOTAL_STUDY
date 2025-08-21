function getNumericValue(message) {

    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== null && value !== '';
        if (isValid) return Number(value);
    }

}