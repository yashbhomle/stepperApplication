import { Box, Button, Dialog, DialogTitle, Icon } from "@mui/material";
import { useState } from "react";

interface IProps {
  handleNext: () => void;
  handleBack: () => void;
}

function TermsCondition(props: IProps) {
  const { handleBack } = props;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      Please accept Terms & Condition
      <Box sx={{ mb: 2 }}>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              setOpenDialog(true);
            }}
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
      <Dialog
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
      >
        <DialogTitle>
          <Icon
            baseClassName="fas"
            className="fa-plus-circle"
            color="primary"
          />
          {"Data stored"}
        </DialogTitle>
      </Dialog>
    </>
  );
}

export default TermsCondition;
