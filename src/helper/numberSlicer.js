export const numberSlicer = (amount) => {
    let counter = 0;
    let newAmount = "";
    let array = amount.split("");
    for (let index = amount.length - 1; index >= 0; index--) {
        if (counter < 3) {
            newAmount = array[index] + newAmount;
            counter++;
        } else if (counter === 3) {
            newAmount = array[index] + "," + newAmount;
            counter = 1;
        }
    }
    return newAmount;
}