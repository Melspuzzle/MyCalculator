export function calculation(savedCalculation) {
    let result;
    const operators = ["+", "-", "*", "/"];
    if (!/^[0-9+\-*/\s]+$/.test(savedCalculation)) {
        return "Invalid input";
    }
    const operator = operators.find(operator => savedCalculation.includes(operator));
    if (!operator) return "Invalid input";
    for (let char of savedCalculation) {
        if ("+-*/".includes(char)) {
            let values = savedCalculation.split(char).map(Number);
            if (values.some(isNaN)) return "Invalid input";
            switch (char) {
                case "+":
                    result = values[0] + values[1];
                    break;
                case "-":
                    result = values[0] - values[1];
                    break;
                case "*":
                    result = values[0] * values[1];
                    break;
                case "/":
                    if (values[1] == 0) {
                        return "Invalid input";
                    }
                    result = values[0] / values[1];
                    break;
            }
            break;
        }
    }
    return result;
}
