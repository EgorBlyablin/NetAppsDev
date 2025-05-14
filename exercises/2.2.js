export const listToIntervals = (numbers) => {
    let intervals = [];
    let start = numbers[0];
    let end = numbers[0];

    for (let i = 1; i <= numbers.length; i++) {
        if (numbers[i] === end + 1) {
            end = numbers[i]; // Если текущее число продолжает диапазон, обновляем end
        } else {
            // Если не продолжает - добавляем диапазон или одиночное число в результат
            if (start === end) {
                intervals.push(`${start}`);
            } else {
                intervals.push(`${start}-${end}`);
            }
            // Обновляем начальное и конечное значение для следующего диапазона
            if (i < numbers.length) {
                start = numbers[i];
                end = numbers[i];
            }
        }
    }

    return intervals.join(',');
}
