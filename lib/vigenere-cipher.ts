export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const alphabet_table = Array.from({ length: 26 }, (_, i) =>
  Array.from({ length: 26 }, (_, j) => alphabet.charAt((j + i) % 26))
);

export function vigenere(text: string, key: string): [string, string] {
  let keyText = "";
  let resp = "";
  const norm_text = text.replace(/ /g, "").toLocaleUpperCase();
  const norm_key = key.toLocaleUpperCase();

  for (let i = 0; i < norm_text.length; i++) {
    const pos = i % key.length;

    const letterFromText = norm_text.charAt(i);
    const letterFromKey = norm_key.charAt(pos);

    let y = alphabet.indexOf(letterFromKey);
    let x = alphabet.indexOf(letterFromText);

    resp += alphabet_table[y][x];
    keyText += letterFromKey;
  }

  return [resp, keyText];
}
