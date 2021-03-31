import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import { Formik, Form } from 'formik'

import { createComment, deleteComment, getProductById } from '../../store/product/thunk'
import { CardDetailsProduct } from './components/CardDetailsProduct'
import { EditProductModal } from './components/EditProductModal'
import { CommentItem } from './components/CommentItem'

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
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()
  const { id } = useParams()
  const product = useSelector((state) => state.productInfo.product)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const onSubmitForm = (values, actions) => {
    console.log(values)
    const data = {
      description: values.comment,
      productId: id,
      date: new Date(),
    }
    dispatch(createComment(data, id))
    actions.resetForm()
  }

  const onDeleteComment = (productId, id) => {
    dispatch(deleteComment(productId, id))
  }

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
    <Grid container justify='center' spacing={6} className={classes.root}>
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
                <CardActions>
                  <Button variant='outlined' color='primary' onClick={handleClickOpen}>
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Divider />
          </Grid>
          <EditProductModal
            product={product}
            productId={id}
            open={open}
            handleClose={handleClose}
          />
        </Paper>
      </Grid>

      <Grid container item xs={12} spacing={4}>
        <Grid item xs={12}>
          <Formik
            initialValues={{
              comment: '',
            }}
            onSubmit={onSubmitForm}>
            {({ handleChange, values }) => (
              <Form>
                <TextField
                  onChange={handleChange}
                  value={values.comment}
                  label='You comment'
                  name='comment'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  required={true}
                />
                <Button type='submit'>Надіслати</Button>
              </Form>
            )}
          </Formik>
          <Divider />
        </Grid>
        <Grid container spacing={4} item>
          {product.comment &&
            product.comment.map((item) => (
              <CommentItem key={item.id} item={item} onDeleteComment={onDeleteComment} />
            ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
