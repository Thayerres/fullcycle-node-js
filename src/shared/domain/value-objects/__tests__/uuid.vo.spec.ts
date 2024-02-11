import { InvalidUuidError, Uuid } from "../uuid.vo"

describe('Uuid Unit Tests', () => {

  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

  test('should throw error when uuid is invalid', () => {
    expect(() => {
      new Uuid('invalid-uuid')
    }).toThrow(new InvalidUuidError)
    expect(validateSpy).toHaveBeenCalledTimes(1);
  })

  test('should be create a valid uuid', () => {
    const uuid = new Uuid()
    expect(uuid.id).toBeDefined()
    expect(validateSpy).toHaveBeenCalledTimes(1);
  })

  test('should accept a valid uuid', () => {
    const uuid = new Uuid("9a5a8c8a-9bf8-4feb-8b17-3813510b472a")
    expect(uuid.id).toBe("9a5a8c8a-9bf8-4feb-8b17-3813510b472a")
    expect(validateSpy).toHaveBeenCalledTimes(1);
  })
})