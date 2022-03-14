import { Chip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Checkbox from '@mui/material/Checkbox';
const CheckBox=()=>{

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return(
        <Box style={{display:'flex',alignItems:'center',}}>
            <Checkbox {...label} defaultChecked size="small" />
                <Typography variant="caption" style={{lineHeight:1.2,paddingRight:10}}>
                    Only show with priority score {">="}  
                </Typography>
            <Chip label={'80%'} sx={{borderRadius:1,border:1,backgroundColor:'white'}} size='small'/>
        </Box>
    )
}

export default CheckBox;