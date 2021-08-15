export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const alphabet_table = Array.from({ length: 26 }, (_, i) =>
  Array.from({ length: 26 }, (_, j) => alphabet.charAt((j + i) % 26))
);

function normalize(text: string): string {
  return text.replace(/ /g, "").toLocaleUpperCase();
}

export function vigenere(text: string, key: string): string {
  let cipher_text = "";
  const norm_text = normalize(text);

  for (let i = 0; i < norm_text.length; i++) {
    const pos = i % key.length;

    const text_letter_position = alphabet.indexOf(norm_text[i]);
    const key_letter_position = alphabet.indexOf(key[pos]);

    const cipher_letter_position =
      (text_letter_position + key_letter_position) % 26;

    cipher_text += alphabet.charAt(cipher_letter_position);
  }

  return cipher_text;
}
