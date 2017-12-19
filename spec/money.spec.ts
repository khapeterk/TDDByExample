import {Dollar, Franc} from '../src/money';

describe("Dollar Tests", () => {
   it("should test multiplication", () => {
      let five: Dollar = new Dollar(5);
  expect(five.times(2).isEqual(new Dollar(10))).toBe(true);
  expect(five.times(3).isEqual(new Dollar(15))).toBe(true);
});
   it("should test dollar equality", () => {
       let five: Dollar = new Dollar(5);
      expect(five.isEqual(new Dollar(5))).toBe(true);
      expect(five.isEqual(new Dollar(2))).toBe(false);
   });
   it("Dollar should not equal Franc", () => {
     expect(new Franc(5).isEqual(new Dollar(5))).toBe(false);
   });
});
describe("Franc Tests", () => {
   it("should test multiplication", () => {
     let five: Franc = new Franc(5);
     expect(five.times(2).isEqual(new Franc(10))).toBe(true);
     expect(five.times(3).isEqual(new Franc(15))).toBe(true);
   });
  it("should test dollar equality", () => {
    let five: Franc = new Franc(5);
    expect(five.isEqual(new Franc(5))).toBe(true);
    expect(five.isEqual(new Franc(2))).toBe(false);
  });
});