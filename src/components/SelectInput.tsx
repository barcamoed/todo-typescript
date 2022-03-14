import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {CurrencyObjT} from '../Interfaces'
type currenciesT={
    currencies:CurrencyObjT[]
}
type SelectStylesT={
    styles:React.CSSProperties
}
type SelectedValueCallbackT={
    selectedValue:(value:string)=>void
}

type Props = currenciesT&SelectStylesT&SelectedValueCallbackT

const SelectInput:React.FC<Props>=({currencies,styles,selectedValue}:Props)=>{
    const [currency, setCurrency] = useState('EUR');
    // const currencies = props.currencies
    const handleChange=(e:any)=>{
        console.log('Select Input onChange',e.target.value)
        setCurrency(e.target.value)
        selectedValue(e.target.value)
    }

    return(
        <TextField
          id="outlined-select-currency"
          select
          style={styles}
        //   label="Select"
          value={currency}
          size='small'
          onChange={handleChange}
        //   helperText="Please select your currency"
        >
          {currencies.map((option:any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    )
}

export default SelectInput