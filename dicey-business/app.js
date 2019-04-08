let advanced = false;

class Die {
    constructor() {
        this.roll();
        this.wrapper = $(`<div class="col-md-3"></div>`);
        this.div = $(`<div class="die m-3 shadow">${this.value}</div>`);
        if (!advanced) {
            this.wrapper.append(this.div);
        } else {
            this.wrapper.css('font-size', '10em');
            this.wrapper.text(this.getFace());
        }
        $('#dice-container').append(this.wrapper);
        this.wrapper.click(() => this.reroll());
        this.wrapper.dblclick(() => this.removeMe());
    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }

    reroll() {
        this.roll();
        if (!advanced) {
            this.div.text(this.value);
        } else {
            this.wrapper.text(this.getFace());
        }
    }

    removeMe() {
        diceArray.splice(diceArray.indexOf(this), 1);
        this.wrapper.remove();
    }

    getFace() {
        switch (this.value) {
            case 1:
                return '⚀';
            case 2:
                return '⚁';
            case 3:
                return '⚂';
            case 4:
                return '⚃';
            case 5:
                return '⚄';
            case 6:
                return '⚅';
            default:
                break;
        }
    }
};

const diceArray = [];

$('#new').click(() => {
    let dice = new Die();
    diceArray.push(dice);
});

$('#reroll').click(() => diceArray.forEach(die => die.reroll()));

const getSum = () => diceArray.reduce((sum, die) => sum += die.value, 0);

$('#sum').click(() => alert(`Sum of Dice is ${getSum()}!`));

$('#advanced').hide();
$('body').keydown(e => {
    if (e.which === 16) {
        $('#advanced').show();
        setInterval(() => $('#advanced').css({ 'background-color': getRandomColor(), 'color': 'white' }), 50);
        $('#dice-container').empty();
        diceArray.splice(0, diceArray.length);
        advanced = true;
    }
});

const getRandomColor = () => {
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};