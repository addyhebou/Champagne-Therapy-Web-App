import { useGetWriters } from './useGetWriters';

export const useGetWriter = async (id: string) => {
  try {
    const writers = await useGetWriters();
    return writers.find((writer) => writer.id === id);
  } catch (error) {
    console.error('Error fetching writers:', error);
  }
};
