import {GridValueGetterParams,GridColDef } from '@mui/x-data-grid';
import SearchBar from '../../components/Searchbar';
import SelectInput from '../../components/SelectInput';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import SettingsButton from '../../components/ButtonFilterSettings'
import DataGridTable from '../../components/DataGridTable';
import { makeStyles } from "@mui/styles";
import useWindowSize from '../../hooks/useWindowSize'
import {IWindowSize} from '../../Interfaces'
import CheckBox from '../../components/Checkbox'

const useStyles = makeStyles({
    root: {
        "& .styledrows": {
        borderRadius:'3px',
        border:'1px solid lightgrey',
        margin:'5px',
        backgroundColor:'lightgray',
        },
    }
});

const FaultsPage=()=>{
const classes= useStyles();
const windowSize:IWindowSize= useWindowSize()
const windowSizeCheck = windowSize!=undefined && windowSize.width!=undefined && windowSize.width>500;
console.log('Window Size',windowSize);
const currencies = [{value:'USD',label: '$'},{value: 'EUR',label: '€',},{value: 'BTC',label: '฿',},{value: 'JPY',label: '¥',}];
const searchValueCallBack=(value:string)=>{
    console.log('Callback in parent ',value)
}
const selectedValueCallback=(value:string)=>{
    console.log('Callback in parent',value)
}
const columns:GridColDef[]=[{
    field: 'faultCode',
    headerName: 'Fault Code (Severity)',
    editable: true,
    flex:1,
    // width:300,
    align:'left',
    renderCell: (params:any) => (
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{height:'20px',display:'flex',alignItems:'center'}}>
          <div>
            {params.value} &#40;{'A'}&#41;
          </div>
        </div>
        {windowSizeCheck&&
        <div style={{height:'20px',display:'flex',alignItems:'center'}}>
          {'Maximum speed of 145Km/h exceeded'}
        </div>
        }
      </div>
    ),
    },
    {
    field: 'totalFaultLogs',
    headerName: 'Total Fault Logs',
    // width: 110,
    flex:1,
    editable: true,
    align:'center',
    renderCell: (params:any) => (
      <>
        <div >
          <Chip label={params.value} size="small" sx={{borderRadius:0,padding:0.1}} />
        </div>
      </>
    )
    },
    {
      field: 'affectedVehicles',
      headerName: 'Affected Vehicles/Most Recent',
    //   type: 'number',
      // width: 110,
      align:'left',
      flex:1,
      editable: true,
      sortable: false,
      renderCell: (params:any) => (
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{height:'20px',display:'flex',alignItems:'center'}}>
            <div>
              {params.value} &#40;{'A'}&#41;
            </div>
          </div>
          {windowSizeCheck&&
          <div style={{paddingLeft:2,fontSize:10,height:'20px',display:'flex',alignItems:'center'}}>
            {'09/10/22 10:30-14:00 CDT'} 
          </div>
          }
        </div>
      ),
    },
    {
      field: 'woRequests',
      headerName: 'WO Requests',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      align:'left',
      flex:1,
      // width: 150,
      // valueGetter: (params: GridValueGetterParams) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'priorityScoreAvg',
      headerName: 'Priority Score avg.',
      // width: 110,
      flex:1,
      editable: true,
      align:'left',
    },
    {
      field: 'Links',
      headerName: '',
      // flex:1,
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      align:'left',
      minWidth: 161.667,
      renderCell: (params:any) => (
        <>
          <div>
            <a href=''>Link</a>
          </div>
        </>
      ),
    }
];
  const rows = [{ id: 1, faultCode: 'Snow', totalFaultLogs: 24,
     affectedVehicles: 35,woRequests:'WO Req',priorityScoreAvg:20+'%' },
     { id: 2, faultCode: 'Snow', totalFaultLogs: 15,
     affectedVehicles: 31,woRequests:'WO Req',priorityScoreAvg:90+'%' },
     { id: 3, faultCode: 'Snow', totalFaultLogs: 10,
     affectedVehicles: 36,woRequests:'WO Req',priorityScoreAvg:60+'%' },
     { id: 4, faultCode: 'Snow', totalFaultLogs: 5,
     affectedVehicles: 38,woRequests:'WO Req',priorityScoreAvg:80+'%' },
     { id: 5, faultCode: 'Snow', totalFaultLogs: 20,
     affectedVehicles: 35,woRequests:'WO Req',priorityScoreAvg:50+'%' },
     { id: 6, faultCode: 'Snow', totalFaultLogs: 11,
     affectedVehicles: 45,woRequests:'WO Req',priorityScoreAvg:30+'%' }];
return(
    <div className={classes.root} style={{height: '100%', width: '100%' }}>
    <Box sx={{display:'flex', alignItems:'center', width: '100%',height:50,backgroundColor:'lightgray',}}>
          <Typography sx={{marginLeft:{xs:5,md:10}}} variant="h5"  component="div">
            Fault Logs
          </Typography>
    </Box>
    <div style={{display:'flex',alignItems:'flex-end',
         justifyContent:'center',height:40,
         marginTop:50,marginLeft:10,marginRight:10}}>
        <SearchBar 
          searchValue={searchValueCallBack}
          page='Faults' 
          searchStyle={{backgroundColor:'lightgrey',marginLeft:0,}} 
        />
        <SelectInput currencies={currencies} selectedValue={selectedValueCallback} 
        styles={{backgroundColor:'lightgrey',marginLeft:20,marginTop:50,width:'13.3%',minWidth:40, }} />
        <SelectInput currencies={[]} selectedValue={selectedValueCallback} 
        styles={{backgroundColor:'lightgrey',marginLeft:20,marginTop:50,width:'13.3%',minWidth:40, }} />
        <SettingsButton styles={{
         borderColor:'grey',
         height:40,
         color:'grey',
         textAlign:'center',
         textTransform: 'none',
         minWidth:30,
         }}/>
         <CheckBox/>
    </div>
        <DataGridTable rows={rows} mycolumns={columns}/>
    </div>
)

}

export default FaultsPage