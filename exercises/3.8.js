const clearValue = (value) => value.toString().toLowerCase().replace(/\s+/g, '');

export const isPalindrom = (data) => {
    // Преобразуем в строку, приводим к нижнему регистру и удаляем пробельные символы
    let strValue = clearValue(data);
    
    // Сравниваем строку с её перевернутой версией
    return strValue === strValue.split('').reverse().join('');
}