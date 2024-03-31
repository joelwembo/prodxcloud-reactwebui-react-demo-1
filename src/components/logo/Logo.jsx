import React , {useState} from 'react';

function Logo(props) {
    const [dataLogo] = useState([
        {
            id: 1,
            name: 'BINABOX'
        },
        {
            id: 2,
            name: 'BINABOX'
        },
        {
            id: 3,
            name: 'BINABOX'
        },
        {
            id: 4,
            name: 'BINABOX'
        },
        {
            id: 5,
            name: 'BINABOX'
        },
        {
            id: 6,
            name: 'BINABOX'
        },
        {
            id: 7,
            name: 'BINABOX'
        },
        {
            id: 8,
            name: 'BINABOX'
        },
        {
            id: 9,
            name: 'BINABOX'
        },
        {
            id: 10,
            name: 'BINABOX'
        },
    ])
    return (
        <section className="logo-slider">          
                <div className="logo-slider-wrap">
                    <div className="logo-slider-inner">
                        {
                            dataLogo.map(idx => (
                                <h3 key={idx.id}>{idx.name}</h3>
                            ))
                        }

                    </div>
                    <div className="logo-slider-inner style-2">
                        {
                            dataLogo.map(idx => (
                                <h3 key={idx.id}>{idx.name}</h3>
                            ))
                        }
                    </div>
                </div>
            </section>
    );
}

export default Logo;