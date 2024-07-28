import { Box, Button } from "@mui/material";

interface IProps {
  handleNext: () => void;
  handleBack: () => void;
}

function TermsCondition(props: IProps) {
  const { handleNext, handleBack } = props;
  return (
    <>
      Please accept Terms & Condition
      <Box sx={{ mb: 2 }}>
        <div>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 1, mr: 1 }}
            data-cy="termsBtn"
          >
            Accept
          </Button>
          <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
            Back
          </Button>
        </div>
      </Box>
    </>
  );
}

export default TermsCondition;
