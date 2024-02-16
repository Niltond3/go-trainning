const keys = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "00",
  "0",
  "reset",
] as const;

export type KeyType = typeof keys[number];