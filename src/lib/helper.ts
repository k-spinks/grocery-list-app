export function hexToRgb(hex?: string) {
  if (!hex) return "160, 160, 160";

  hex = hex.replace("#", "");

  if (hex.length !== 6) return "160, 160, 160";

  const bigint = parseInt(hex, 16);

  if (isNaN(bigint)) return "160, 160, 160";

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
}
