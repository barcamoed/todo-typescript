import React from "react";
import { GridColDef, } from '@mui/x-data-grid';

export interface ITask{
    task:string,
    deadline:number;
}

export type AssetsGridRowDataObjT= {
    id:number,
    firstName:string|null,
    lastName:string|null,
    age:number|null
}



// export interface double {
//     key:IFaultsGridRowDataObj[] | AssetsGridRowDataObjT[]
// }
export type multiple=AssetsGridRowDataObjT | { id: number|string|undefined,
    faultCode: number|string|undefined,
    totalFaultLogs: number|string|undefined,
    affectedVehicles: number|string|undefined,
    woRequests:number|string|undefined,
    priorityScoreAvg:number|string|undefined}

export type IFaultsGridRowDataObj={
    id: number|string|undefined,
    faultCode: number|string|undefined,
    totalFaultLogs: number|string|undefined,
    affectedVehicles: number|string|undefined,
    woRequests:number|string|undefined,
    priorityScoreAvg:number|string|undefined
 }

export interface IGridColumns{

    //   field: string|undefined,
    //   headerName: string|undefined,
    //   flex?:number|string|undefined,
    //   description?: string|undefined,
    //   sortable?: boolean|undefined,
    //   align?:string|undefined,
    //   width?: number|undefined,
    //   renderCell?:(params:any)=> void
    //   valueGetter?:(params:any)=> void
    mycolumns:GridColDef[]

}

export interface CurrencyObjT{
    value:string,
    label:string
}

export interface IStyles{
    styles:React.CSSProperties
}

// type for useWindowSize hook,
export interface IWindowSize {
    width: number | undefined;
    height: number | undefined;
  }
