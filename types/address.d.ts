export interface IAddress {
  zipCode: number;    // 우편번호
  newAddress: string; // 도로명 주소
  oldAddress: string; // 지번 주소
  country: string;    // 국가
  state: string;      // 시/도
  city?: string;      // 시/군/구
}

export interface IAddresses {
  total: number;          // 주소 총 수
  currentPage: number;    // 현재 페이지
  countPerPage: number;   // 페이지당 주소 수
  lastPage: number;       // 마지막 페이지
  addresses: IAddress[];  // 페이지에 해당하는 주소 검색 결과
}