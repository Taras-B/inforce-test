import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Formik, Form } from 'formik'

import { useDispatch } from 'react-redux'
import { FormNewProduct } from '../../ProductsList/components/FormNewProduct'
import { updateProduct } from '../../../store/product/thunk'

export const EditProductModal = ({ open, handleClose, product, productId }) => {
  const dispatch = useDispatch()
  const onSubmitForm = (values, actions) => {
    console.log(values)
    dispatch(updateProduct(values, productId))
    actions.resetForm()
    handleClose()
  }
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Редагувати</DialogTitle>
      <DialogContent>
        <DialogContentText>Ви впевнені що хочете редагувати продукт?</DialogContentText>
        <Formik
          initialValues={{
            name: product.name,
            count: product.count,
            image: product.imageUrl,
            height: product.size.height,
            width: product.size.width,
            weight: product.weight,
          }}
          onSubmit={onSubmitForm}>
          {({ handleChange, values }) => (
            <Form>
              <FormNewProduct
                values={values}
                handleChange={handleChange}
                handleCloseAddProduct={handleClose}
                buttonName='Редагувати'
              />
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  )
}
