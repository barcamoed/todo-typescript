import { DataGrid, GridColDef, GridValueGetterParams, } from '@mui/x-data-grid';
import { makeStyles } from "@mui/styles";
import {AssetsGridRowDataObjT,IGridColumns,IFaultsGridRowDataObj,multiple} from '../Interfaces'
import SearchBar from './Searchbar';
import SelectInput from './SelectInput';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SettingsButton from './ButtonFilterSettings'
const useStyles = makeStyles({
root: {
"& .styledrows": {
borderRadius:'3px',
border:'1px solid orange',
minWidth:134,
margin:'5px',
backgroundColor:'lightgray',
},

}
});


// type finalRowDataProps = (rowDataAssetsProps|rowDataFaultsProps)
interface IProps {
  rows:multiple[];
  mycolumns:GridColDef[]
} 

const DataGridTable=({rows,mycolumns}:IProps)=>{
    const classes= useStyles();
    const columns = mycolumns

      const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];

      const searchValueCallBack=(value:string)=>{
        console.log('Callback in parent ',value)
      }
      const selectedValueCallback=(value:string)=>{
        console.log('Callback in parent',value)
      }
      
return(
    <div className={classes.root} style={{height: '100%', width: '100%' }}>
    {/* <Box sx={{display:'flex', alignItems:'center', width: '100%',height:50,backgroundColor:'lightgray',}}>
          <Typography sx={{marginLeft:{xs:5,md:10}}} variant="h5"  component="div">
            Assets
          </Typography>
    </Box>
    <div style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-start',height:40,marginTop:50,}}>
        <SearchBar 
          searchValue={searchValueCallBack}
          page='Assets' 
          searchStyle={{backgroundColor:'lightgrey' }} 
        />
        <SelectInput currencies={currencies} selectedValue={selectedValueCallback} styles={{backgroundColor:'lightgrey',marginLeft:20,marginTop:50,width:'15.3%' }} />
        <SelectInput currencies={[]} selectedValue={selectedValueCallback} styles={{backgroundColor:'lightgrey',marginLeft:20,marginTop:50,width:'15.3%' }} />
        <SettingsButton styles={{
         borderColor:'grey',
         height:40, 
         color:'grey',
         textTransform: 'none'
         }}/>
    </div> */}
    <div style={{display:'flex',height: '100%', width: '100%' }}>
     <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        disableColumnMenu
        getRowClassName={(params) => `styledrows`}
        sx={{
          display:'flex', //to show pagination at top rather than below
          flexDirection: "column-reverse",  //to show pagination at top rather than below
          border: 0, // table's border,
          marginLeft:{xs:0,md:5},
          marginRight:{xs:0,md:5},
          marginBottom:{xs:0,md:5},
            // tables margin
          '.css-rtrcn9-MuiTablePagination-root':{
            overflow:'hidden' // pagination scrollbar
          },
          '.css-1pans1z-MuiDataGrid-virtualScroller':{
              overflow:'hidden'
          },
          '.MuiDataGrid-cell':{
            borderBottom:0,
          },
          '.css-204u17-MuiDataGrid-main':{
            overflow:'hidden'
          }
        }}
      />

      </div>
    </div>
)

}

export default DataGridTable