export interface IInclude {
  model: any;
  as: string;
  where?: any;
  required?: boolean;
  attributes?: any | any[];
  all?: boolean;
  paranoid?: boolean;
  include?: Array<IInclude>;
}

export interface ISortable {
  model: any;
  as: string;
}

export interface IParams {
  [key: string]: any;
  where?: any;
  include?: Array<IInclude>;
  order?: Array<Array<ISortable | string>>;
  page?: number;
  limit?: number;
  offset?: number;    // Not use client
  lastPage?: number;
  total?: number;
}
