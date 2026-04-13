import Team from '../Team';
import Character from '../Character';

describe('Team class', () => {
  let team;
  let character1;
  let character2;
  let character3;

  beforeEach(() => {
    team = new Team();
    character1 = new Character('Robin', 'Bowman');
    character2 = new Character('Arthur', 'Swordsman');
    character3 = new Character('Merlin', 'Magician');
  });

  describe('constructor', () => {
    test('should create empty Set', () => {
      expect(team.members).toBeInstanceOf(Set);
      expect(team.members.size).toBe(0);
    });
  });

  describe('add method', () => {
    test('should add character to team', () => {
      team.add(character1);
      expect(team.members.size).toBe(1);
      expect(team.members.has(character1)).toBe(true);
    });

    test('should throw error when adding duplicate character', () => {
      team.add(character1);
      expect(() => team.add(character1)).toThrow('Character already exists in the team');
    });

    test('should allow adding different characters', () => {
      team.add(character1);
      team.add(character2);
      expect(team.members.size).toBe(2);
    });
  });

  describe('addAll method', () => {
    test('should add multiple characters', () => {
      team.addAll(character1, character2, character3);
      expect(team.members.size).toBe(3);
    });

    test('should not throw error when adding duplicates', () => {
      team.add(character1);
      expect(() => team.addAll(character1, character2)).not.toThrow();
      expect(team.members.size).toBe(2);
    });

    test('should handle no arguments', () => {
      team.addAll();
      expect(team.members.size).toBe(0);
    });

    test('should handle adding same character multiple times', () => {
      team.addAll(character1, character1, character1);
      expect(team.members.size).toBe(1);
    });
  });

  describe('toArray method', () => {
    test('should convert Set to Array', () => {
      team.addAll(character1, character2, character3);
      const arr = team.toArray();
      expect(Array.isArray(arr)).toBe(true);
      expect(arr.length).toBe(3);
    });

    test('should return empty array when team is empty', () => {
      const arr = team.toArray();
      expect(arr).toEqual([]);
    });

    test('should return new array each time', () => {
      team.add(character1);
      const arr1 = team.toArray();
      const arr2 = team.toArray();
      expect(arr1).toEqual(arr2);
      expect(arr1).not.toBe(arr2);
    });
  });

  describe('integration tests', () => {
    test('should maintain uniqueness after mixed operations', () => {
      team.add(character1);
      team.addAll(character1, character2, character3);
      // Не добавляем character3 через add() - это вызовет ошибку
      expect(team.members.size).toBe(3);
      expect(team.toArray()).toHaveLength(3);
    });

    test('should work with addAll only', () => {
      team.addAll(character1, character2, character1, character3, character2);
      expect(team.members.size).toBe(3);
    });
  });
});
