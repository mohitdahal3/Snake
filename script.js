
//chaini variables ko declaration 

let snake;
let scale = 20;
let food;
let rows;
let cols;
let foodX;
let foodY;
let dead = false




function setup() {
    createCanvas(400, 400);
    frameRate(5); //elle dhilo banauxa frame rate lai
    snake = new Snake(); //snake class bata naya snake bandai xa hai guys
    rows = height / scale;
    cols = width / scale;
    makeNewFood();
    console.log('console kolle kholni vanyo k talai\n tara kei xaina developer tool kholesi halka programmer wala feel cahiexa vane copy this code and paste below and you will not die if you hit yourself\'snake.die = function(){}\'')
}


function draw() {

    background(0);
    //khana
    fill(255, 0, 0);
    noStroke();
    rect(food.x, food.y, scale, scale);


    //sarpa (saaap)
    if (!dead) {
        snake.update();
    }
    snake.show();
    snake.eat(food);
    snake.die();

    //edi sarpa le vitta lai hanyo vane sarpa ki gaand margaye
    if ((snake.body[0].x < 0) || (snake.body[0].x >= width) || (snake.body[0].y < 0) || (snake.body[0].y >= height)) {
        dead = true;
    }

    score = snake.body.length - 1
    textAlign(RIGHT, TOP)
    textSize(20);
    fill(255);
    text(`Score:${score}`, width, 0)


}

//kun key handa kata jani ra mathi jadai xa vane direct tala jana na dini algorithm is below

function keyPressed() {
    switch (key) {
        case 'a':
            if (snake.xSpeed != 1) {
                snake.xSpeed = -1;
                snake.ySpeed = 0;
            }
            break;

        case 'd':
            if (snake.xSpeed != -1) {
                snake.xSpeed = 1;
                snake.ySpeed = 0;
            }
            break;

        case 's':
            if (snake.ySpeed != -1) {
                snake.xSpeed = 0;
                snake.ySpeed = 1;
            }
            break;

        case 'w':
            if (snake.ySpeed != 1) {
                snake.xSpeed = 0;
                snake.ySpeed = -1;
            }
            break;

        default:
            break;
    }

}

//foodx ra food y lai naya random thau ma lyauni algorithm tala xa

function makeNewFood() {
    foodX = floor(random(0, cols)) * scale;
    foodY = floor(random(0, rows)) * scale;
    food = createVector(foodX, foodY);

    if(checkForFoodOverlap(foodX,foodY)){
        makeNewFood()
    }

}

function checkForFoodOverlap(foodx,foody){
    snake.body.forEach(element => {
        return((foodx==element.x) && (foody==element.y))     
    });
}
