import React from 'react';
import MenuItem from '../../Components/Menu-Item/Menu-Item.Componenet';
import './Directory.Styles.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        sections: [
            {
                title: 'HATS',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'Jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'SNEAKERS',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'WOMENS',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'MENS',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: ''
            }
        ]
    }
    render() {
        const { sections } = this.state;
        return (
            <div className='directory-menu'>
                {
                    sections.map(({ id, ...otherSectionProps }) =>
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                }
            </div>
        );
    }
}

export default Directory;