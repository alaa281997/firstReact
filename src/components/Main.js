import React from 'react';
import HornedBeasts from './HornedBeasts';

import data from './data.json';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            filterData: data
        }
    }

    render() {
        return (
            <>
                {data.map(item => {
                    return (
                        <HornedBeasts
                            title={item.title}
                            imageUrl={item.image_url}
                            description={item.description}
                            getArr={this.props.getArr}
                           
                        />
                    )
                })}
            </>
        )
    }


}

export default Main;