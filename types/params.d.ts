export interface IInclude {
  model: any;
  as: string;
  where?: any;
  required?: boolean;
  include: IInclude[];
}

export interface ISortable {
  model: any;
  as: string;
}

export interface IParams {
  where?: any;
  include?: IInclude[];
  order?: Array<Array<ISortable | string>>;
  page?: number;
  limit?: number;
  lastPage?: number;
  total?: number;
}
