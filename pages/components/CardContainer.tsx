import React from 'react'
import cardContents from '../../config/cardContent.json'
import Card from './Card'

export default class CardContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="container mission">
                        <h2>Independence Village</h2>
                        <p>Independence Village and seniors are a match made in heaven! After 35 years of meeting their needs, exceeding their expectations, and becoming one of the most trusted names in senior living, we think there is much to celebrate. Fresh interiors, bright, inspiring colors, and modern updates are some of the changes taking place, but what won’t be changing is our family’s commitment to you and your family – that’s carved in stone.</p>
                        <p>Part of a group of family owned, award winning senior communities, at Independence Village we always put family first. So join us, and let our family show you your new home!</p>

                    </div>
                </div>  
                <div className="container">
                    <div className="row">
                        {cardContents.map((content) => <Card key={content.id} cardContent={content} />)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
