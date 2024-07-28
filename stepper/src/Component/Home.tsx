import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleStart() {
    navigate("/user-Detail");
  }

  return (
    <>
      <div className="BaseContainer">
        <Card
          sx={{
            minWidth: 1600,
            padding: "100px",
            backgroundColor: "rgb(140, 140, 140)",
          }}
        >
          <CardContent className="baseCard">
            <Grid spacing={10}>
              <Grid xs={12} style={{ paddingBottom: "10px" }}>
                <Typography variant="h4" data-cy="mainTitle">
                  Welcome to banking application
                </Typography>
              </Grid>
              <Grid xs={12}>
                <Button
                  variant="contained"
                  onClick={handleStart}
                  data-cy="startBtn"
                >
                  Let's Start
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Home;
