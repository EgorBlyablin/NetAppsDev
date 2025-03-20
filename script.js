window.onload = function () {
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null

    // окно вывода результата
    outputElement = document.getElementById("result")

    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    const onDigitButtonClicked = (digit) => {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
                b += digit
                outputElement.innerHTML = b
            }
        }
    }
    
    const calculate = () => {
        if (a === '' || b === '' || !selectedOperation)
            return

        switch (selectedOperation) {
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
        }

        a = expressionResult.toString()
        b = ''
        selectedOperation = null

        outputElement.innerHTML = a
    }

    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = calculate

    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = () => onDigitButtonClicked(button.innerHTML)
    });

    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = () => {
        if (a === '') return
        selectedOperation = 'x'
    }

    document.getElementById("btn_op_plus").onclick = () => {
        if (a === '') return
        selectedOperation = '+'
    }

    document.getElementById("btn_op_minus").onclick = () => {
        if (a === '') return
        selectedOperation = '-'
    }

    document.getElementById("btn_op_div").onclick = () => {
        if (a === '') return
        selectedOperation = '/'
    }

    document.getElementById("btn_op_sign").onclick = () => {
        if (b !== '') {
            b = (-b).toString()
            outputElement.innerHTML = b
        }

        if (a !== '') {
            a = (-a).toString()
            outputElement.innerHTML = a
        }
    }

    document.getElementById("btn_op_percent").onclick = () => {
        console.log(a, b, selectedOperation)
        
        if (b !== '') {
            if (selectedOperation === 'x' || selectedOperation === '/') {
                b = (+b / 100).toString()
            } else {
                b = (+a * (+b / 100)).toString()
            }
            calculate()
        }
    }

    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = () => {
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
};