# Mummifier

It should replace a vowel in a word with the word "mummy" under certain conditions.

## Examples:

Test Scenarios

- “blah” → “blah” because the vowel is < 30% of the word's length
- “bla” → “blmummy” because the vowel is > 30% of the word's length
- “blaa” → “blmummy” . It should replace continuous vowels only once
- “blaaha” → “blmummyhmummy” . It should work with multi sets of vowels
- “blA” → “blmummy” . It shoud work with capital letters
