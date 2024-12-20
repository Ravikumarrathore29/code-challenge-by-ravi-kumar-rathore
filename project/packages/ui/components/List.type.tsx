export interface IPokimonData {

  data: IDataOrCurrentData;
 
}
export interface IDataOrCurrentData {
  
     results: (IResultsEntity)[] ;
}
export interface IResultsEntity {
  name: string;
  url: string;
}

export interface IVirtualListProps {
  list:IResultsEntity[];
  height:number
  width:string
  itemHeight:number

}
