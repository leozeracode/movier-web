import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFCE00',
    },
    secondary: {
      main: '#FFF',
    },
    error: {
      main: red.A400,
    },
  },
  components:{
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
      },
    },
  }
});
