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
      <div className="homeNav">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="rightNavOptions">
          <IconButton
            onClick={() => {
              navigate("/history");
            }}
            style={{
              fontSize: "1.2rem",
              width: "50%",
              borderRadius: "10rem",
            }}
            className="rightNavOptionsEffect"
          >
            <RestoreIcon style={{ fontSize: "1.2rem" }} />
            <p>&nbsp;History</p>
          </IconButton>
          <Button
            className="rightNavOptionsEffect"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
            style={{
              width: "50%",
              borderRadius: "10rem",
            }}
          >
            <p
              style={{
                fontSize: "0.98rem",
                color: "red",
                borderRadius: "10rem",
              }}
            >
              Logout&nbsp;{">"}
            </p>
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div style={{ marginLeft: "1.5rem" }}>
            <h1 style={{ fontWeight: "800", color: "rgba(0, 0, 0, 0.7" }}>
              Providing Quality Video Call Just Like Quality Education
            </h1>
            <div style={{ display: "flex", gap: "10px", marginTop: "2rem" }}>
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

        <div
          className="rightPanel"
          style={{ marginRight: "10rem", height: "80vh", width: "auto" }}
        >
          <img srcSet="/logo3.png" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
