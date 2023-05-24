export const doesWriterMatchSearchName = (
  writer: string,
  searchTerm: string
) => {
  return writer.toLowerCase().includes(searchTerm.toLowerCase());
};
