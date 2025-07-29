import React, { useEffect, } from "react";


import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "../Styles/Kontakt.css";



function Gallerie() {
  useEffect(() => {
    document.title = "dwb-premium-bau.de | Kontakt";

    console.log(
      "Console > Gallerie!"
    );

  }, []);


    return (
    <div class="head">
      <header className="Contact-header">

        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
              Kontakt
            </Typography>
          </Box>
        </Container>

        <center>
          <p>Gallerie: </p>
        </center>

        <div>

   
        
        </div>
      </header>
      <header className="Gallerie-body">
        <div className="body">
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography align="center" variant="p1" component="p1" gutterBottom>
              E-Mail:
              <li><a href="marshall@dwb-premium-bau.de"></a>Schreib mir eine E-Mail !</li>
            </Typography>
          </Box>
        </Container>
 
        
    

        </div>
      </header>
    </div>
  );
}

export default Gallerie;
