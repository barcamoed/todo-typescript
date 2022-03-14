import {GridValueGetterParams,GridColDef } from '@mui/x-data-grid';
import SearchBar from '../../components/Searchbar';
import SelectInput from '../../components/SelectInput';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SettingsButton from '../../components/ButtonFilterSettings'
import DataGridTable from '../../components/DataGridTable';
import { makeStyles } from "@mui/styles";


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

const AssetsPage=()=>{
const classes= useStyles();
const currencies = [{value:'USD',label: '$'},{value: 'EUR',label: '€',},
                      {value: 'BTC',label: '฿',},{value: 'JPY',label: '¥',}];
const searchValueCallBack=(value:string)=>{
    console.log('Callback in parent ',value)
    }
const selectedValueCallback=(value:string)=>{
    console.log('Callback in parent',value)
    }
const columns:GridColDef[]=[{
      field: 'firstName',
      headerName: 'First name',
      // width: 110,
      editable: true,
      flex:1,
      align:'left',
      renderCell: (params:any) => (
        <>
        <div
          style={{width:'10px', height:'10px',marginLeft: 10, backgroundColor:'orange' }}
        >
        </div>
          <div style={{marginLeft:'10px'}}>
            {params.value}
          </div>
        </>
      ),
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      // width: 110,
      flex:1,
      editable: true,
      align:'left',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      // width: 110,
      align:'center',
      flex:1,
      editable: true,
      sortable: false,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      align:'center',
      flex:1,
      // width: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'Links',
      headerName: '',
      flex:1,
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      align:'center',
      // width: 110,
      renderCell: (params:any) => (
        <>
          <div >
            <a href=''>Link</a>
          </div>
        </>
      ),
    }];
  const rows = [{ id: 1, lastName: 'Snow', firstName: 'John', age: 35, },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }];
return(
    <div className={classes.root} style={{height: '100%', width: '100%' }}>
    <Box sx={{display:'flex', alignItems:'center', width: '100%',height:50,backgroundColor:'lightgray',}}>
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
    </div>
        <DataGridTable rows={rows} mycolumns={columns}/>
    </div>
)

}

export default AssetsPage
