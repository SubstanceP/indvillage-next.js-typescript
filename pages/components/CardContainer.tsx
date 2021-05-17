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
                        <p>Now, more than ever, upholding top notch senior living standards is crucial for both clients and their families, for piece of mind in the midst of such uncertain times.  Our communities implemented early safeguards to ensure our healthy environment remained that way, and our exceptional staff and management have done the impossible: to date our family of communities remain entirely <em>Covid free</em>. It’s essential to have experienced leadership facilitate a safe atmosphere in which clients not only feel comfortable, they feel at home</p>
                        <p>Independence Village and seniors are a match made in heaven! After 35 years of meeting their needs, exceeding their expectations, and becoming, arguably, the most trusted name in senior living, we think there is much to celebrate. Fresh interiors, bright, inspiring colors, and modern updates are some of the changes taking place, but what won’t be changing is our family’s commitment to you and your family – that’s carved in stone.
                        </p>
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
