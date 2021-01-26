class Snake {

    //this is a constructor jolle snake object lai construct garxa
    constructor() {
        this.body = [];
        this.body[0] = createVector(20, height / 2);
        this.lastelement;

        this.xSpeed = 0;
        this.ySpeed = 0;

    }
    update() {
            //as name elle chai update garxa snake lai simple vasa ma snake lai agadi badhauxa
        let headx = this.body[0].x
        let heady = this.body[0].y

        headx += this.xSpeed * scale
        heady += this.ySpeed * scale

        this.lastelement = this.body.pop()
        this.body.unshift(createVector(headx, heady))
    }
    

    // snake lai elle show garxa green colour ma (0,255,0) vaneko green ko colour code ho na pattaye google han mu*i
    show() {
        this.body.forEach(element => {
            fill(0, 255, 0);
            noStroke();
            rect(element.x, element.y, scale, scale);
        });
    }

    // snake ko body ma naya vector object thapxa  tala ko le
    grow() {
        this.body.push(this.lastelement);
    }

    //food ra head ko location grid ma eautai xa vane grow function chalauxa jun mathi xa ra naya food ko banauni algorithm lai call garxa jun arko file ma xa
    eat(food) {
        if (this.body[0].x == food.x && this.body[0].y == food.y) {
            makeNewFood();
            this.grow();
        }
    }

    // head ra aru kunai body ko object ko location same xa vane dead lai true banauxa jun le update lai band garauxa arko file ma if not dead then update lekhexa 
    die() {
        for (let i = 1; i < this.body.length; i++) {
            if ((this.body[0].x == this.body[i].x ) && this.body[0].y == this.body[i].y) {
                dead = true
                console.log("margayaaaa madarchoooood");
            }
        }
    }
}