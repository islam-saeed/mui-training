'use client'
import { Accordion, AccordionDetails, AccordionSummary, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const NavbarAccordion = () => {
  return (
    <>
        {['Woman','Man', 'Mother-Child', 'Home & Furniture', 'Super Market', 'Cosmetics', 'Shoe & Bag', 'Electronics', 'Sports & Outdoors', 'Best Seller'].map((category) => {
            return (
                <Accordion key={category}>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    >
                        <Typography>{category}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <Grid container spacing={5} sx={{p:5}}>
                                <Grid item>
                                    <Grid container spacing={3}>
                                    <Grid item>
                                        <Grid container spacing={6} direction='column'>
                                        <Grid item>
                                            <Typography variant="h6" sx={{mb:'10px', pl:2}}>Shoe &amp; Bag</Typography>
                                            <ListItem>Casual Shoes</ListItem>
                                            <ListItem>Boots</ListItem>
                                            <ListItem>Sandals</ListItem>
                                            <ListItem>Slippers</ListItem>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6" sx={{mb:'10px', pl:2}}>Luxury &amp; designer</Typography>
                                            <ListItem>Towels</ListItem>
                                            <ListItem>Bathroom Scales</ListItem>
                                            <ListItem>Bath Mats</ListItem>
                                            <ListItem>Shower Caps</ListItem>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container spacing={6} direction='column'>
                                        <Grid item>
                                            <Typography variant="h6" sx={{mb:'10px', pl:2}}>Home Textile</Typography>
                                            <ListItem>Bedding</ListItem>
                                            <ListItem>Pillows</ListItem>
                                            <ListItem>Handkerchief Towels</ListItem>
                                            <ListItem>Curtain</ListItem>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6" sx={{mb:'10px', pl:2}}>Cosmetics</Typography>
                                            <ListItem>Shampoo and Conditioner</ListItem>
                                            <ListItem>Styling Products</ListItem>
                                            <ListItem>Hair Accessories</ListItem>
                                            <ListItem>Men&apos;s Grooming</ListItem>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container spacing={6} direction='column'>
                                        <Grid item>
                                            <Typography variant="h6" sx={{mb:'10px', pl:2}}>Party Supplies</Typography>
                                            <ListItem>Event &amp; Party</ListItem>
                                            <ListItem>Christmas</ListItem>
                                            <ListItem>Artificial Decorations</ListItem>
                                            <ListItem>Wedding</ListItem>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6" sx={{mb:'10px', pl:2}}>Sport &amp; Outdoors</Typography>
                                            <ListItem>Team Sports</ListItem>
                                            <ListItem>Water Sports</ListItem>
                                            <ListItem>Outdoor Recreation</ListItem>
                                            <ListItem>Fitness Equipment</ListItem>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" sx={{mb:'10px', pl:2}}>Clothes</Typography>
                                        <ListItem>Bottoms</ListItem>
                                        <ListItem>Women&apos;s Clothing</ListItem>
                                        <ListItem>T-Shirts and Tops</ListItem>
                                        <ListItem>Dresses</ListItem>
                                        <ListItem>Outerwear</ListItem>
                                        <ListItem>Formal Wear</ListItem>
                                        <ListItem>Casual Wear</ListItem>
                                        <ListItem>Seasonal Collections</ListItem>
                                        <ListItem>Sports Bras</ListItem>
                                        <ListItem>Workout Tops</ListItem>
                                        <ListItem>Fall Wardrobe</ListItem>
                                    </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </List>
                    </AccordionDetails>
                </Accordion>
            )
        })}
        
    </>
  )
}

export default NavbarAccordion