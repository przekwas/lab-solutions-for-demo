$('#square-btn').click(e => {
    let side = $('[aria-label="Side length"]').val();
    new Square(side);
    $('[aria-label="Side length"]').val('');
});

$('#rectangle-btn').click(e => {
    let height = $('[aria-label="Height"]').val();
    let width = $('[aria-label="Width"]').val();
    new Rectangle(height, width);
    $('[aria-label="Height"]').val("");
    $('[aria-label="Width"]').val("");
});

$('#circle-btn').click(() => {
    let radius = $('[aria-label="Radius"]').val();
    new Circle(radius);
    $('[aria-label="Radius"]').val("");
});

$('#triangle-btn').click(() => {
    let height = $('[aria-label="Triangle height"]').val();
    new Triangle(height);
    $('[aria-label="Triangle height"]').val("");
});

const generateRandomVal = minValue => Math.floor(Math.random() * (600 - minValue));

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = $('<div></div>');
        this.div.attr('class', 'shape');
        this.div.css({
            height: this.height,
            width: this.width
        });
        this.drawShape();
        this.div.dblclick(() => this.removeShapeAndClearPanel());
    }

    getRandomLocation() {
        this.x = generateRandomVal(this.height);
        this.y = generateRandomVal(this.width);
    }

    drawShape() {
        this.getRandomLocation();
        this.div.css({
            top: this.x,
            left: this.y
        });
        $('.canvas').append(this.div);
    }

    describeShape() {
        $('#shape-name').val(this.div.attr('id'));
        $('#shape-height').val(this.height);
        $('#shape-width').val(this.width);
    }

    removeShapeAndClearPanel() {
        this.div.remove();
        let inputs = $('.side-val');
        for (let input of inputs) $(input).val('');
    }
}

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.div.attr('id', 'square');
        this.div.click(() => this.describeSquare());
    }

    describeSquare() {
        this.describeShape();
        $('#shape-area').val(this.height * this.width);
        $('#shape-perimeter').val((this.height * 2) + (this.width * 2));
        $('#shape-radius').val(' N/A ');
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.attr('id', 'rectangle');
        this.div.click(() => this.decribeRectangle());
    }

    decribeRectangle() {
        this.describeShape();
        $('#shape-area').val(this.height * this.width);
        $('#shape-perimeter').val((this.height * 2) + (this.width * 2));
        $('#shape-radius').val(' N/A ');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.radius = radius;
        this.div.attr('id', 'circle');
        this.div.click(() => this.describeCircle());
    }

    describeCircle() {
        this.describeShape();
        $('#shape-area').val(Math.PI * (Math.pow(this.radius, 2)));
        $('#shape-perimeter').val(2 * Math.PI * this.radius);
        $('#shape-radius').val(this.radius);
        $('#shape-height').val(' N/A ');
        $('#shape-width').val(' N/A ');
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.attr('id', 'triangle');
        this.div.css({
            height: 0,
            width: 0,
            borderBottom: `${this.height}px solid yellow`,
            borderRight: `${this.height}px solid transparent`,
        });
        this.div.click(() => this.describeTriangle());
    }

    describeTriangle() {
        this.describeShape();
        $('#shape-area').val(Math.pow(this.height, 2) / 2);
        $('#shape-perimeter').val((Math.sqrt(2) * this.height) + (this.height * 2));
        $('#shape-radius').val(' N/A ');
    }
}