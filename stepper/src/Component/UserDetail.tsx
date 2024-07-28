import { Box, Step, StepContent, StepLabel, Typography } from "@mui/material";
import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import PersonalDetails from "./StepperComponents/PersonalDetail";
import TermsCondition from "./StepperComponents/TermsCondition";
import AssetDetail from "./StepperComponents/AssetDetail";

function UserDetail() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step key="PersonalDetails">
          <StepLabel>
            <Typography variant="h5" color={"white"} data-cy="stepperStep1">
              Personal Details
            </Typography>
          </StepLabel>
          <StepContent style={{ width: "100%" }}>
            <PersonalDetails handleNext={handleNext} handleBack={handleBack} />
          </StepContent>
        </Step>
        <Step key="AssetDetails">
          <StepLabel>
            <Typography variant="h5" color={"white"} data-cy="stepperStep2">
              Asset Details
            </Typography>
          </StepLabel>
          <StepContent>
            <AssetDetail handleNext={handleNext} handleBack={handleBack} />
          </StepContent>
        </Step>
        <Step key="TermsCondition">
          <StepLabel>
            <Typography variant="h5" color={"white"} data-cy="stepperStep3">
              Terms & Condition
            </Typography>
          </StepLabel>
          <StepContent>
            <TermsCondition handleNext={handleNext} handleBack={handleBack} />
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
}

export default UserDetail;
