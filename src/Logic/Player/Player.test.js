import Player from './Player';

test('', () => {
  const player = Player('Axe');
  player.move(12);
  expect(player.movesMade).toEqual([12]);
  player.move(16);
  player.move(12);
  expect(player.movesMade).toEqual([12, 16]);
});