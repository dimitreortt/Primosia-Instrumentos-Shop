import { Box, styled } from "@mui/system";

export const CustomCheckoutStepperBox = ({ children }: any) => {
  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "secondary.contrastText",
        backgroundColor: "rgba(247, 246, 242,0.5)",
        boxSizing: "border-box",
        padding: 3,
        paddingBottom: 5,
        boxShadow: 1,
        borderRadius: 1,
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3,
      }}
    >
      {children}
    </Box>
  );
};

/*
{
  //@ts-ignore
  width: "100%",
  backgroundColor: theme.palette.secondary.contrastText,
  boxSizing: "border-box",
  padding: 3,
  paddingBottom: 5,
  //@ts-ignore
  //   boxShadow: 1,
  borderRadius: 1,
  borderBottomLeftRadius: 3,
  borderTopLeftRadius: 3,
}
*/
