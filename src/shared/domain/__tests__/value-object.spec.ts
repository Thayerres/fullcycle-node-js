import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
  constructor(readonly value: string){
    super()
  }
}

class ComplexValueObject extends ValueObject{
  constructor(readonly props1: string, readonly props2: number){
    super()
  }
}

describe('ValueObject Unit Tests', () => {
  test('should be equals', () => {
    const ValueObject1 = new StringValueObject('test')
    const ValueObject2 = new StringValueObject('test')

    expect(ValueObject1.equals(ValueObject2)).toBe(true)

    const complexValueObject1 = new ComplexValueObject("test", 1);
    const complexValueObject2 = new ComplexValueObject("test", 1);

    expect(complexValueObject1.equals(complexValueObject2)).toBe(true)
  })

  test("should not be equals", () => {
    const ValueObject1 = new StringValueObject('test')
    const ValueObject2 = new StringValueObject('test2')

    expect(ValueObject1.equals(ValueObject2)).toBe(false)
    expect(ValueObject1.equals(null as any)).toBe(false)
    expect(ValueObject1.equals(undefined as any)).toBe(false)


    const complexValueObject1 = new ComplexValueObject("test", 1);
    const complexValueObject2 = new ComplexValueObject("test", 2);

    expect(complexValueObject1.equals(complexValueObject2)).toBe(false)
    expect(complexValueObject1.equals(null as any)).toBe(false)
    expect(complexValueObject2.equals(undefined as any)).toBe(false)
  })
  
})