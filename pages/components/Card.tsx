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
  excerpt: string
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
    <div className="col s4" id={"post" + cardContent.id.toString()}>
      <div id="services" className="card">
        <div className="card-image" onClick={openModal}>
        <img className="cardImage" alt={''} src={img} />
        </div>
        <div className="card-title" onClick={openModal}>{cardContent.title}</div>
        <div className="card-excerpt">{cardContent.excerpt}</div>
        <div className="card-action">
          <Button className="card-button" variant="outlined" onClick={openModal}>
            {'more'}
          </Button>
          <Dialog onClose={closeModal} maxWidth={'lg'} open={modalOpen}>
            <DialogTitle>{cardContent.title}</DialogTitle>
            <DialogContent dividers>
              <img className="modalImage" alt={''} src={img} />
              <Typography variant="h6" className="cardDescription">{cardContent.description}</Typography>
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
