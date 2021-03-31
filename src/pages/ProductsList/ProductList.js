import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, FormikHelpers } from 'formik'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { createProduct, getProducts } from '../../store/products/thunk'

export const ProductList = () => {
  const [openAdd, setOpenAdd] = useState(false)
  const dispatch = useDispatch()
  const handleCloseAddProduct = () => {
    setOpenAdd(false)
  }
  const onSubmitForm = (values, actions) => {
    console.log(values)
    dispatch(createProduct(values))
    // actions.resetForm()
    setOpenAdd(false)
  }

  React.useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Grid container>
      <Grid item container xs={12}>
        <Button
          onClick={() => {
            setOpenAdd(true)
          }}
          color='primary'>
          New
        </Button>
      </Grid>
      <Grid item container xs={12}>
        list
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
                    <Grid container direction='column'>
                      <TextField
                        onChange={handleChange}
                        value={values.name}
                        label='Product Name'
                        name='name'
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        required={true}
                      />
                      <TextField
                        value={values.count}
                        onChange={handleChange}
                        label='Count'
                        name='count'
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        required={true}
                      />
                      <TextField
                        value={values.image}
                        onChange={handleChange}
                        label='Image Url'
                        name='image'
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        required={true}
                      />
                      <TextField
                        value={values.height}
                        onChange={handleChange}
                        label='Height'
                        name='height'
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        required={true}
                      />
                      <TextField
                        value={values.width}
                        onChange={handleChange}
                        label='Width'
                        name='width'
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        required={true}
                      />
                      <TextField
                        label='Weight'
                        onChange={handleChange}
                        name='weight'
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        required={true}
                        value={values.weight}
                      />
                      <Button
                        onClick={handleCloseAddProduct}
                        color='primary'
                        type='submit'>
                        Cancel
                      </Button>
                      <Button color='primary' type='submit'>
                        login
                      </Button>
                    </Grid>
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
