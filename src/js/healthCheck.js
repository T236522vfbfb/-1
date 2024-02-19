export default function healthCheck(gameCharacter) {
  if (gameCharacter.health > 50) return 'healthy';
  if (gameCharacter.health > 15 || gameCharacter.health < 50 ) return 'wounded';
  if (gameCharacter.health < 15) return 'critical';
}