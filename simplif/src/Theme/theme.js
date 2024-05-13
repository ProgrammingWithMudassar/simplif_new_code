import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const font = 'Poppins, sans-serif';

const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
      custom: "#fff"
    },
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: "#FE5722",
      600: "#FE6A3B",
      300: "#FFF2EE"
    },
    tertiary: {
      main: "#0A4DAA"
    },
    gray: {
      300: '#D5D5D5',
      500: '#f7f8fa'
    }
  },
  typography: {
    fontFamily: font
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "none",
          borderRadius: 8,
          fontSize: 16,
          cursor: "pointer",
          textTransform: "none",
          height: "30px",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "rgba(41, 184, 77, 0.1)",
          },
        },
        contained: {
          backgroundColor: "#FE5722",
          color: "#fff",
          borderRadius: 4,
          boxShadow: "0px 0px 9px 2px rgba(254, 87, 34, 0.2)",
          "&:hover": {
            backgroundColor: "#FE5722",
            borderRadius: 4,
            boxShadow: "0px 0px 13px 2px rgba(254, 87, 34, 0.3)",
          },
        },

        outlined: {
          backgroundColor: "transparent",
          color: "rgb(52,199,89)",
          border: "1px solid #379237",
          borderRadius: 6,
          "&:hover": {
            backgroundColor: "#379237",
            border: "1px solid rgb(52,199,89)",
            borderRadius: 6,
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#FE5722', // Tertiary main color for active page
            color: 'white',
          },
          '&:not(.Mui-selected)': {
            backgroundColor: '#FFF2EE',
            color: '#FE5722',
          },
          '&:hover': {
            backgroundColor: 'rgba(10, 77, 170, 0.8)', // Slightly transparent version of the tertiary main color for hover on active
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
  },
  root: {
    "& .MuiDataGrid-columnHeaders": {
      fontSize: 17.8,
    },
    "& .MuiDataGrid-row Mui-selected": {
      backgroundColor: "red"
    }
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0px',
      height: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      width: '0rem',
      backgroundColor: '#D5073C',
      borderRadius: "2rem",
    },
  },
});

export default theme;
