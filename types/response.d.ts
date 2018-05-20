export interface IListResponse<T> {
  total: number;
  page: number;
  lastPage: number;
  limit?: number;
  list: T[]
}