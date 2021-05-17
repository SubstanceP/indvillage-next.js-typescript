import {Button, Dialog} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'

import * as images from '../../photos'

interface cardContent {
  id: number
  title: string
  description: string
  imageURL: string
}

interface CardProps {
  cardContent: cardContent
}

interface CardState {
  modalOpen: boolean
}

const getPhoto = (photo: string) => {
  return (images as any)[photo]
}

// Functional Component for Card, instantiating prop and state variables
const Card = (props: CardProps, state: CardState) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const openModal = () => {
    console.log('opening modal')
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  const {cardContent} = props

  const img = (images as any)[props.cardContent.imageURL]

  return (
    <div className="col s4" id={cardContent.id.toString()}>
      <div className="card" id="test">
        <div className="card-image" onClick={openModal}>
          <img alt={''} src={img} />
        </div>
        <div className="card-title">{cardContent.title}</div>
        <div className="card-content" dangerouslySetInnerHTML={{__html: ''}}></div>
        <div className="card-action">
          <Button className="card-button" variant="outlined" onClick={openModal}>
            {'more'}
          </Button>
          <Dialog onClose={closeModal} maxWidth={'lg'} open={modalOpen}>
            <DialogTitle>{cardContent.title}</DialogTitle>
            <DialogContent dividers>
              <img alt={''} src={img} />
              <Typography variant="h6">{cardContent.description}</Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={closeModal} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default Card
