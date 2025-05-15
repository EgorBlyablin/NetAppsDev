const clearValue = (value) => value.toString().toLowerCase().replace(/\s+/g, '');

export const isPalindrom = (data) => {
    // Преобразуем в строку, приводим к нижнему регистру и удаляем пробельные символы
    let strValue = clearValue(data);
    
    // Сравниваем строку с её перевернутой версией
    return strValue === strValue.split('').reverse().join('');
}

// Второе решение
// const isPalindrom = (data) => {
//     const cleanStr = clearValue(data);
//     let left = 0;
//     let right = cleanStr.length - 1;

//     while (left < right) {
//         if (cleanStr[left] !== cleanStr[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }