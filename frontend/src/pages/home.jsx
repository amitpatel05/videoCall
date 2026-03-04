import "../App.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { TextField } from "@mui/material";
import AuthContext from "../contexts/AuthContext";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className="navBar">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div style={{ right: "0", width: "10vw" }}>
          <IconButton
            onClick={() => {
              navigate("/history");
            }}
            style={{ fontSize: "1.2rem" }}
          >
            <RestoreIcon style={{ fontSize: "1.2rem" }} />
            <p>History</p>
          </IconButton>
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            <p style={{ fontSize: "0.98rem", color: "red" }}>Logout {">"}</p>
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
              />
              <Button onClick={handleJoinVideoCall} variant="contained">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="rightPanel">
          <img srcSet="/logo3.png" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
