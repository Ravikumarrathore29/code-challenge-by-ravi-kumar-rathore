export interface IPokimonData {
    status: string;
    endpointName: string;
    requestId: string;
    startedTimeStamp: number;
    data: IDataOrCurrentData;
    fulfilledTimeStamp: number;
    isUninitialized: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    currentData: IDataOrCurrentData;
    isFetching: boolean;
  }
  export interface IDataOrCurrentData {
    count: number;
    next: string;
    previous?: null;
    results?: (IResultsEntity)[] | null;
  }
  export interface IResultsEntity {
    name: string;
    url: string;
  }
  