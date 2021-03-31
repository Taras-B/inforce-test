import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
export const FormNewProduct = ({
  values,
  handleChange,
  handleCloseAddProduct,
  buttonName,
}) => {
  return (
    <Grid container direction='column'>
      <TextField
        onChange={handleChange}
        value={values.name}
        label='Продукт'
        name='name'
        variant='outlined'
        fullWidth
        margin='normal'
        required={true}
      />
      <TextField
        value={values.count}
        onChange={handleChange}
        label='Кількість'
        name='count'
        variant='outlined'
        fullWidth
        margin='normal'
        required={true}
      />
      <TextField
        value={values.image}
        onChange={handleChange}
        label='Силка на картинку'
        name='image'
        variant='outlined'
        fullWidth
        margin='normal'
        required={true}
      />
      <TextField
        value={values.height}
        onChange={handleChange}
        label='Висота'
        name='height'
        variant='outlined'
        fullWidth
        margin='normal'
        required={true}
      />
      <TextField
        value={values.width}
        onChange={handleChange}
        label='Ширина'
        name='width'
        variant='outlined'
        fullWidth
        margin='normal'
        required={true}
      />
      <TextField
        label='Вага'
        onChange={handleChange}
        name='weight'
        variant='outlined'
        fullWidth
        margin='normal'
        required={true}
        value={values.weight}
      />
      <Button onClick={handleCloseAddProduct} color='secondary'>
        Відмінити
      </Button>
      <Button color='primary' type='submit'>
        {buttonName}
      </Button>
    </Grid>
  )
}
