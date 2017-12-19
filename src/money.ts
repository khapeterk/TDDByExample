class Money {
    public amount: number;

    isEqual(money: Money): boolean {
        return this.amount === money.amount && this.constructor === money.constructor;
    }
}

export class Dollar extends Money {
    constructor(amount: number) {
        super();
        this.amount = amount;
    }

    times(multiplier: number): Money {
       return new Dollar(this.amount * multiplier);
    }
}
export class Franc extends Money {
    constructor(amount: number) {
        super();
        this.amount = amount;
    }

    times(multiplier: number): Money {
       return new Franc(this.amount * multiplier);
    }
}
