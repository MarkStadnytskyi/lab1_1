class Goods {
    constructor(first, second) {
        this.first = first
        this.second = second
    }

    cost() {
        return this.first * this.second
    }
}

const goods1 = new Goods(5, 10)
console.log(goods1.first)
console.log(goods1.second)
console.log(goods1.cost())