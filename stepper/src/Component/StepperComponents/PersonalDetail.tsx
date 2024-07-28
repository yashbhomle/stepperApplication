import { Box, Button, Container, Grid, TextField } from "@mui/material";

interface IProps {
  handleNext: () => void;
  handleBack: () => void;
}

function PersonalDetails(props: IProps) {
  const { handleNext } = props;
  return (
    <>
      <Container className="StepperContainer" style={{ width: "fit-content" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-required"
              label="First Name"
              data-cy="firstName"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-required"
              label="Last Name"
              data-cy="lastName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-required"
              fullWidth
              label="Email"
              data-cy="email"
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  data-cy="personalDetailBtn"
                >
                  Continue
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PersonalDetails;
