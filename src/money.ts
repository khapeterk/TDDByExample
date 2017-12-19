class Money {
    public amount: number;
}

export class Dollar extends Money {
    constructor(amount: number) {
        super();
        this.amount = amount;
    }

    times(multiplier: number): void {
        this.amount *= multiplier;
    }

    isEqual(money: Money): boolean {
       return this.amount === money.amount;
    }
}
export class Franc {
    private amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }

    times(multiplier: number): void {
        this.amount *= multiplier;
    }

    isEqual(franc: Franc): boolean {
        return this.amount === franc.amount;
    }
}
