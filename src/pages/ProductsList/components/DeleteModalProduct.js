import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../../store/products/thunk'

export const DeleteModalProduct = ({ id }) => {
  const [open, setOpen] = React.useState(false)

  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleDelete = () => {
    dispatch(deleteProduct(id))
    console.log(id)

    setOpen(false)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Видалити
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title'>
        <DialogTitle id='alert-dialog-title'>
          Ви впевнені що хочете видалити продукт?
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleDelete} color='primary'>
            Yes
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
