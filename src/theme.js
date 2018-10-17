import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            light: '#a255ff',
            main: '#651fff',
            dark: '#0100ca',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f9683a',
            main: '#bf360c',
            dark: '#870000',
            contrastText: '#fff',
        }
    },
    typography: {
        useNextVariants: true,
    }
})