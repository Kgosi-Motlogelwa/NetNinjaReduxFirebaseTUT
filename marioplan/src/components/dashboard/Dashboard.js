import React, { Component } from "react";
import { Container } from "@mui/material/Button";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <div>
          <ProjectList></ProjectList>
        </div>
        <div></div>
      </Container>
    );
  }
}

export default Dashboard;
