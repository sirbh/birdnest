import { AppBar } from "@mui/material"
import Typography from "@mui/material/Typography"
import Toolbar from "@mui/material/Toolbar"

function Nav(){
    return <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        BirdsNest
      </Typography>
    </Toolbar>
  </AppBar>
}

export default Nav