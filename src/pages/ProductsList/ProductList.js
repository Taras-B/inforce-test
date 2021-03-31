import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import DialogTitle from '@material-ui/core/DialogTitle'
import { createProduct, getProducts } from '../../store/products/thunk'
import { FormNewProduct } from './components/FormNewProduct'
import { DeleteModalProduct } from './components/DeleteModalProduct'

const useStyles = makeStyles({
  root: {
    marginTop: 80,
  },
  media: {
    height: 140,
  },
})

export const ProductList = () => {
  const classes = useStyles()
  const [openAdd, setOpenAdd] = useState(false)
  const { products } = useSelector((state) => state.products)

  const dispatch = useDispatch()
  const handleCloseAddProduct = () => {
    setOpenAdd(false)
  }

  const onSubmitForm = (values, actions) => {
    console.log(values)
    dispatch(createProduct(values))
    actions.resetForm()
    setOpenAdd(false)
  }

  React.useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item container xs={12}>
        <Button
          onClick={() => {
            setOpenAdd(true)
          }}
          color='primary'
          variant='outlined'>
          New
        </Button>
      </Grid>
      <Grid item container xs={12} spacing={4}>
        {products.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={6}>
            <Card>
              <CardMedia
                image={item.imageUrl}
                title='Paella dish'
                className={classes.media}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Назва: {item.name}
                </Typography>
                <Typography gutterBottom variant='h5' component='h2'>
                  Кількість: {item.count}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`products/${item.id}`} style={{ textDecoration: 'none' }}>
                  <Button variant='contained' size='small' color='primary'>
                    Більше
                  </Button>
                </Link>
                <DeleteModalProduct id={item.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={openAdd}
        onClose={handleCloseAddProduct}
        aria-labelledby='form-dialog-title'
        fullWidth
        maxWidth='sm'>
        <DialogTitle id='form-dialog-title'>Add new Product</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              name: '',
              count: 0,
              image: '',
              height: '',
              width: '',
              weight: '',
            }}
            onSubmit={onSubmitForm}>
            {({ handleChange, values }) => (
              <Grid container>
                <Grid item xs={12}>
                  <Form>
                    <FormNewProduct
                      values={values}
                      handleChange={handleChange}
                      handleCloseAddProduct={handleCloseAddProduct}
                      buttonName='Створити'
                    />
                  </Form>
                </Grid>
              </Grid>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  )
}
