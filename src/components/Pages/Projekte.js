
import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "../Styles/Projekte.css";


function Projekte() {
  useEffect(() => {
    document.title = "dwb-premium-bau.de | Projekte";

    console.log(
      "Console > Projekte"
    );
  }, []);

  return (
    <div className="Projects">
      <header className="Projects-header">
        
          <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography
                align="center"
                variant="h5"
                component="h1"
                gutterBottom
              >
                Projekt Bereich
              </Typography>
            </Box>
          </Container>




          <div className="body">
            <center>

              <table class="tg">

                <thead>
                  <tr>
                    <th class="tg-baqh">Name</th>
                    <th class="tg-baqh">Description</th>
                    <th class="tg-baqh">Version</th>
                    <th class="tg-baqh">Author</th>
                    <th class="tg-baqh">Link</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td class="tg-baqh">Dachziegel</td>
                    <td class="tg-baqh">Dachziegel</td>
                    <td class="tg-baqh">2025</td>
                    <td class="tg-baqh">Calvin</td>
                    <td class="tg-baqh">
                      <div>
                        <center>
                          <Button
                            class="button"
                            variant="contained"
                            href="https://github.com/blackzspace-de/blackleakz-bot"
                          >
                            Visit
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </center>




        </div>
      </header>
    </div>
  );
}

export default Projekte;
