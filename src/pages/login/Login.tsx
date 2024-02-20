import { AppBar, createTheme, CssBaseline, styled, ThemeProvider } from "@mui/material";


type formData = {
  useId: string;
  password: string;
};

export type signInRequestBody = formData;

export const signIn = () => {
  const theme = createTheme(
    {
      components: {
        MuiFormHelperText: {
          styleOverrides: {
            root: {
              margin: '0 auto'
            }
          }
        }
      }
    }
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledAppBar>

        </StyledAppBar>
      </ThemeProvider>
    </>
  );
}e

export const StyledAppBar = styled(AppBar)({
  color: 'white',
  backgroundColor: '#14325F'
});