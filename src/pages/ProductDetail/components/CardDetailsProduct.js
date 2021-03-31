import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
export const CardDetailsProduct = ({ product }) => {
  return (
    <>
      <Grid container justify='flex-start' spacing={2}>
        <Grid item xs={6} sm={3}>
          <Typography gutterBottom variant='h5' component='h2'>
            Назва:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.name}
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify='flex-start' spacing={2}>
        <Grid item xs={6} sm={3}>
          <Typography gutterBottom variant='h5' component='h2'>
            Кількість:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.count}
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify='flex-start' spacing={2}>
        <Grid item xs={6} sm={3}>
          <Typography gutterBottom variant='h5' component='h2'>
            Вага:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.weight}
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify='flex-start' spacing={2}>
        <Grid item xs={6} sm={3}>
          <Typography gutterBottom variant='h5' component='h2'>
            Висота:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.size.height}
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify='flex-start' spacing={2}>
        <Grid item xs={6} sm={3}>
          <Typography gutterBottom variant='h5' component='h2'>
            Ширина:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.size.width}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
