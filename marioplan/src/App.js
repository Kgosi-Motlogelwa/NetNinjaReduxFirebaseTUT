import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { Grid, Menu } from "./components/muiCollection/indexMUI";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Grid container spacing={2}>
          <Grid item xs={6} md={8} style={{ border: "1px solid black " }}>
            Grid One
            {/* <Item>xs=6 md=8</Item> */}
          </Grid>
          <Grid item xs={6} md={4} style={{ border: "1px solid black " }}>
            Grid Two
            {/* <Item>xs=6 md=4</Item> */}
          </Grid>
          <Grid item xs={6} md={4} style={{ border: "1px solid black " }}>
            Grid Three
            {/* <Item>xs=6 md=4</Item> */}
          </Grid>
          <Grid item xs={6} md={8} style={{ border: "1px solid black " }}>
            sdfasd
            {/* <Item>xs=6 md=8</Item> */}
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
