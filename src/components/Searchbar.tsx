import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import useWindowSize from '../hooks/useWindowSize'
import {IWindowSize} from '../Interfaces'


  type SearchStyleT={
    searchStyle:React.CSSProperties,
    page:string
  }
  type SearchValueT={
    searchValue:(value:string)=>void
  }
  type Props = SearchStyleT & SearchValueT 

const SearchBar=({searchStyle,searchValue,page}:Props)=>{

  const windowSize:IWindowSize= useWindowSize()
  const windowSizeCheck = windowSize!=undefined && windowSize.width!=undefined && windowSize.width>500;
  const labelResult = 
  (windowSizeCheck)&& page=='Assets'?
  'Assets':
  (windowSizeCheck)&& page=='Faults'?'Faults':'' 

  const handleChange=(e:any)=>{
    console.log('child handleChangle',e.target.value);
    searchValue(e.target.value);
  }
    return ( 
    <TextField
        // {...params}
        size='small'
        style={searchStyle}
        sx={{width:250,marginLeft:{xs:2,md:10}}}
        label={`Search ${labelResult}`}
        onChange={handleChange}
        InputProps={{
          endAdornment: ( 
            <InputAdornment position='end' >
               <IconButton size='small' >
                  <SearchIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          )
        }}
    />
      )

}

export default SearchBar