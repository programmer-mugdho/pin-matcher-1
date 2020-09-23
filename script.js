function generatePin() {
    const pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generate-pin').value = pin;
}
const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', generatePin);
function showOutput(num) {
    document.getElementById('input').value = num;
}


const number = document.getElementsByClassName('number');
let output = '';
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        output = output + this.id;
        showOutput(output);
    });
}
const clearAllBtn = document.getElementById('clearAll');
clearAllBtn.addEventListener('click', () => {
    output = '';
    document.getElementById('input').value = output;
});
document.getElementById('backspace').addEventListener('click', () => {
    output = output.slice(0, -1)
    document.getElementById('input').value = output;
})
let tryLeft  = 3;
function checkSubmit() {
    const inputValue = parseInt(document.getElementById('input').value);
    const genaretedValue = parseInt(document.getElementById('generate-pin').value);
    if (genaretedValue === inputValue) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('failed').style.display = 'none';
    } else {
        document.getElementById('success').style.display = 'none';
        document.getElementById('failed').style.display = 'block';
        document.getElementById('try-left').innerText = tryLeft;
        tryLeft --;
        document.getElementById('try-left').innerText = tryLeft;
        if (tryLeft === 0) {
            document.getElementsByTagName('button').attr("disabled", "disabled");
        }
    }
    output = '';
    document.getElementById('input').value = output;
    document.getElementById('generate-pin').value = '';
}
document.getElementById('submit').addEventListener('click', () => {
    checkSubmit();
})