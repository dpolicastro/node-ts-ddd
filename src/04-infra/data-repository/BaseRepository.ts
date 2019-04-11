export interface BaseRepository<T> {
  read(id: string): Promise<T>;
  readAll(): Promise<T[]>;
}
