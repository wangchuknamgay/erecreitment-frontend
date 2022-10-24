import React from 'react'
import { Container, Grid } from "@material-ui/core"
import Lprofile from "./Lprofile"
import Lheader from "./Lheader"
import Lresume from "./Lresume"
import Lportfolio from "./Lportfolio"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Loginprofile() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor: 'blue'}}>
          <Lprofile/>

        </Grid>
        <Grid item xs style={{backgroundColor: 'red'}}>
          <Lheader/>
          <Router>
          <Routes>
            <Route path='./lportfolio'>
            <Lportfolio/>
            </Route>
            <Route path='./'>
            <Lresume/>
            </Route>
          </Routes>
          </Router>
          
          

        </Grid>

      </Grid>

    </Container>
  )
}

export default Loginprofile