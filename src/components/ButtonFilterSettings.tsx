import Button from '@mui/material/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {IStyles} from '../Interfaces'
import useWindowSize from '../hooks/useWindowSize'
import {IWindowSize} from '../Interfaces'

type Props = IStyles

const ButtonFilterSettings=({styles}:Props)=>{
  const windowSize:IWindowSize= useWindowSize()
  const windowSizeCheck = windowSize!=undefined && windowSize.width!=undefined && windowSize.width>500;
  
    const settingsClicked=()=>{
        console.log('Setting Clicked')
    }

    return(
    <Button variant="outlined" 
         style={styles}
         size="medium"
         sx={{
            ':hover': {
              bgcolor: 'white',
              color: 'white',
              borderColor:'grey',
            },
            '.css-1d6wzja-MuiButton-startIcon':{margin:0,padding:0},
            '.css-1pmohpq-MuiButtonBase-root-MuiButton-root':{padding:windowSizeCheck?1:10},
            marginRight:{xs:2,md:4},
            marginLeft:{xs:2,md:2.5}
          }}
          startIcon={<FilterAltOutlinedIcon />}
          onClick={settingsClicked}
         >
         {windowSizeCheck?'Filter Settings':''}
    </Button>
    )

}

export default ButtonFilterSettings