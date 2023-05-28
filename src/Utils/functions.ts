export const doesWriterMatchSearchName = (
  writer: string,
  searchTerm: string
) => {
  return writer.toLowerCase().includes(searchTerm.toLowerCase());
};

export const isObjectEmpty = (obj: object): boolean =>
  Object.values(obj).every((value) => value.length === 0);

export const clearObject = <T extends Record<string, unknown> | Object>(
  obj: T
): T => {
  return Object.keys(obj).reduce((acc, key) => {
    (acc as Record<string, unknown>)[key] = [];
    return acc;
  }, {} as T);
};
