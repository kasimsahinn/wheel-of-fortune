// utils/names.ts

import _ from 'lodash';

const excludedName = process.env.NEXT_PUBLIC_EXCLUDED_NAME;

export const filterNames = (names: string[]): string[] => {
  return names.filter((name) => name.toLowerCase() !== excludedName);
};

export const spinWheel = (names: string[]): string | null => {
  const filteredNames = filterNames(names);
  if (filteredNames.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * filteredNames.length);
  return filteredNames[randomIndex];
};
