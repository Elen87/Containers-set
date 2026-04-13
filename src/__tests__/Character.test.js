import Character from '../Character';

describe('Character class', () => {
  test('should create character with valid name and type', () => {
    const character = new Character('Robin', 'Bowman');
    expect(character.name).toBe('Robin');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('should throw error if name is too short', () => {
    expect(() => new Character('R', 'Bowman')).toThrow();
  });

  test('should throw error if name is too long', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow();
  });

  test('should throw error if type is invalid', () => {
    expect(() => new Character('Robin', 'Invalid')).toThrow();
  });
});
