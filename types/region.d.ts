export interface IRegionCity {
  readonly id?: number;

  name: string;
  sequence: number;

  // foreign keys
  stateId?: number;
}

export interface IRegionState {
  readonly id?: number;

  name: string;
  sequence: number;

  // foreign keys
  countryId?: number;

  // associations
  cities?: IRegionCity[];
}

export interface IRegionCountry {
  readonly id?: number;

  name: string;
  sequence: number;

  // associations
  states?: IRegionState[];
}