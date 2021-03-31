import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import DialogTitle from '@material-ui/core/DialogTitle'

import { getProductById } from '../../store/product/thunk'
import { CardDetailsProduct } from './components/CardDetailsProduct'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    maxHeight: '1200px',
  },
  media: {
    height: 340,
    width: 500,
  },
}))

export const ProductDetail = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { id } = useParams()
  const product = useSelector((state) => state.productInfo.product)

  React.useEffect(() => {
    if (id) {
      dispatch(getProductById(id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (product === null) {
    return <div>no yet</div>
  }
  return (
    <Grid container justify='center' spacing={4} className={classes.root}>
      <Grid item xs={12} md={12}>
        <Paper elevation={7} style={{ padding: 10 }}>
          <Grid container spacing={1} alignItems='center'>
            <Grid item xs={12}>
              <Typography variant='h6'>Product Details</Typography>
              <Divider />
            </Grid>
            <Grid container justify='center' item xs={12} spacing={2}>
              <Card>
                <CardMedia
                  image={product.imageUrl}
                  title='Paella dish'
                  className={classes.media}
                />
                <CardContent>
                  <CardDetailsProduct product={product} />
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
            <Divider />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
