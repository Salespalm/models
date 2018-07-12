export interface IRegion {
  readonly id?: number;
  name: string;
  sequence: number;
}

export interface IRegionCity extends IRegion {
  // foreign keys
  stateId?: number;
}

export interface IRegionState extends IRegion {
  // foreign keys
  countryId?: number;

  // associations
  cities?: IRegionCity[];
}

export interface IRegionCountry extends IRegion {
  // associations
  states?: IRegionState[];
}