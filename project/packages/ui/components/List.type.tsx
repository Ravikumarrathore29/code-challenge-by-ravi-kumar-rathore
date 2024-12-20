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


export interface IList{
data:any;
handleRemovePokemon: (val: string) => void

}
export interface IDataOrCurrentData {
  results?: (IResultsEntity)[];
}
export interface IResultsEntity {
  name: string;
  url: string;
}

export interface IVirtualListProps {
  list: IResultsEntity[];
  height: number
  width: string
  itemHeight: number

}


export interface IResultListAsGrid{
  results: (IResultsEntity)[];
  handleRemovePokemon: (val: string) => void; 
}