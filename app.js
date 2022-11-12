const TOKEN = "1355950041:AAGVh9HlT3rfGTd7LxRdeCt76yuMWkO9m8s";
const CHAT_ID = "1390769143";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function (e) {
    e.preventDefault();


    let message = `<b>Калькулятор!</b>\n`;
    message += `<b>Сумма:</b> ${this.name.value} + ${this.years.value} = ${+(this.name.value) + +(this.years.value)} \n`;
    message += `<b>Разность:</b> ${this.name.value} - ${this.years.value} = ${+(this.name.value) - +(this.years.value)} \n`;
    message += `<b>Часность:</b> ${this.name.value} / ${this.years.value} = ${+(this.name.value) / +(this.years.value)} \n`;
    message += `<b>Произведение:</b> ${this.name.value} * ${this.years.value} = ${+(this.name.value) * +(this.years.value)} \n`;


    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
        .then((res) => {
            success.style.display = "block"
            this.name.value = "";
            this.years.value = "";
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log('the end');
        })
})

