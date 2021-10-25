import {
  Checkbox,
  Grid,
  Divider,
  Typography,
  Box,
  Button,
  FormGroup,
  FormControlLabel,
} from "@mui/material"
const Footer = () => {
  return (
    <Box>
      <Divider sx={{ width: 1 }} />
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginTop: 2, paddingX: 0.5 }}
      >
        <Grid display="flex" alignItems="center">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox sx={{ marginLeft: 1.3, marginRight: 3 }} />}
              label="Completed(0) / All(3)"
            />
          </FormGroup>
        </Grid>
        <Grid>
          <Button variant="outlined">
            <Typography>Clear Selected Tasks</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Footer
