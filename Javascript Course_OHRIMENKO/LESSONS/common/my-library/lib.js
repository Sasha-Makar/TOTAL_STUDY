function getValue(msg) {
    while (true) {
        let value = prompt(msg);
        let isValid = !isNaN(value) && value !== null && value !== '';
        if (isValid) return Number(value);
    }
}