import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../../store/slice";

interface IProps {
  handleNext: () => void;
  handleBack: () => void;
}

function AssetDetail(props: IProps) {
  const { handleNext, handleBack } = props;
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  function handleData(e: any) {
    const { name, value } = e.target;
    let data = { [name]: value };
    setUserData((prev) => ({ ...prev, ...data }));
  }

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
              name="assetName"
              onChange={handleData}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-required"
              fullWidth
              label="Asset Number"
              data-cy="assetNumber"
              name="assetNumber"
              onChange={handleData}
            />
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(setUserDetail(userData));
                    handleNext();
                  }}
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
