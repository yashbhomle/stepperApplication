import { Box, Button, Container, Grid, TextField } from "@mui/material";

interface IProps {
  handleNext: () => void;
  handleBack: () => void;
}

function AssetDetail(props: IProps) {
  const { handleNext, handleBack } = props;
  return (
    <>
      <Container className="StepperContainer" style={{ width: "fit-content" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-required"
              fullWidth
              label="Asset Name"
              data-cy="assetName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-required"
              fullWidth
              label="Asset Number"
              data-cy="assetNumber"
            />
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  data-cy="assetDetailBtn"
                >
                  Continue
                </Button>
                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AssetDetail;
