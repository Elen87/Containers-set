// src/index.js
import Team from './Team';
import Character from './Character';

// Создаём команду
const team = new Team();

// Создаём персонажей
const bowman = new Character('Robin', 'Bowman');
const swordsman = new Character('Arthur', 'Swordsman');
const magician = new Character('Merlin', 'Magician');

// Демонстрация работы методов
console.log('=== Демонстрация работы класса Team ===\n');

// 1. Добавляем первого персонажа
team.add(bowman);
console.log('После add(bowman):', team.toArray());

// 2. Добавляем нескольких персонажей (включая уже существующего)
team.addAll(bowman, swordsman, magician);
console.log('После addAll(bowman, swordsman, magician):', team.toArray());

// 3. Конвертируем в массив
const members = team.toArray();
console.log('\nИтоговый состав команды:', members);
console.log('Количество уникальных персонажей:', members.length);

// 4. Проверка на ошибку при добавлении дубликата
try {
  team.add(bowman); // попытка добавить уже существующего
} catch (error) {
  console.log('\nОшибка при add(bowman):', error.message);
}
