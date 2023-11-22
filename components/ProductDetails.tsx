'use client'
import React, { useState } from 'react'
import { Tabs, Tab, Grid, Typography } from '@mui/material';
import { TbWash, TbWashMachine, TbIroning1, TbIroningSteam, TbTriangleOff } from "react-icons/tb";
import { PiTShirt } from "react-icons/pi";

const ProductDetails = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
        <Grid container justifyContent='center' alignItems='center'>
            <Grid item>
                <Tabs value={activeTab} onChange={(event, newValue) => setActiveTab(newValue)}>
                    <Tab label="PRODUCT DETAILS" />
                    <Tab label="REVIEWS" />
                    <Tab label="SHIPPING & PAYMENT" />
                </Tabs>
            </Grid>
        </Grid>
        {activeTab === 0 && 
        <Grid container spacing={3} sx={{p:5}}>
          <Grid item sx={{maxWidth:'50%'}}>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Grid container spacing={3} direction='column'>
                  <Grid item>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>Product Details</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" sx={{color:'#555'}}>Short dress with a plunging V-neckline and tie detail. Wide sleeves falling below the elbow. Contrast bead details. Invisible back zip fastening.</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={3} direction='column'>
                  <Grid item>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>Product Description</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" sx={{color:'#555'}}>
                        <ul style={{paddingLeft:'20px', margin:'0'}}>
                            <li>Length | Regular</li>
                            <li>Pattern | Floral</li>
                            <li>Size | 38</li>
                            <li>Fit | Regular fit</li>
                            <li>Age group | Adult</li>
                            <li>Leg opening | Wide leg</li>
                            <li>Sleeve length | Long sleeve</li>
                            <li>Package contents | 2 pcs</li>
                        </ul>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{maxWidth:'48%'}}>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Grid container spacing={3} direction='column'>
                  <Grid item>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>Composition</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" sx={{color:'#555'}}>We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a programme of audits and continuous improvement plans.<br />
                        OUTER SHELL<br />
                        90% cotton 10% linen
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={3} direction='column'>
                  <Grid item>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>Care instructions</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" sx={{color:'#555'}}><TbWash /> Machine wash at max. 30ºC/86ºF with short spin cycle</Typography>
                    <Typography variant="body1" sx={{color:'#555'}}><TbIroning1 /> Iron at a maximum of 110ºC/230ºF</Typography>
                    <Typography variant="body1" sx={{color:'#555'}}><TbIroningSteam /> Do not dry clean</Typography>
                    <Typography variant="body1" sx={{color:'#555'}}><TbTriangleOff /> Do not tumble dry</Typography>
                    <Typography variant="body1" sx={{color:'#555'}}><TbWashMachine /> Wash inside out</Typography>
                    <Typography variant="body1" sx={{color:'#555'}}><PiTShirt /> Wash separately</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>}
        {activeTab === 1 && <div>TAB NUMBER TWO</div>}
        {activeTab === 2 && <div>TAB NUMBER THREE</div>}
        </>
    )
}

export default ProductDetails