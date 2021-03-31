import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

export const CommentItem = ({ item, onDeleteComment }) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={7} style={{ padding: 10 }}>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={12} md={11}>
            <Typography variant='h6'>{item.description}</Typography>
          </Grid>
          <Grid container alignItems='center' item xs={12} md={1}>
            <Grid item xs={6} md={6}>
              <Button
                color='secondary'
                onClick={() => onDeleteComment(item.productId, item.id)}>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
