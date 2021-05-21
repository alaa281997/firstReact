import React from 'react';
import HornedBeasts from './HornedBeasts';
import Form from 'react-bootstrap/Form'
import data from './data.json';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            filterData: data
        }
    }
    showHorns = (e) => {
        let arrayFilter = data.filter(ele => {
            if (ele.horns == e.target.value) {
                return ele
            }
            if (e.target.value == 'All') {
                return ele
            }
        }


        )
        this.setState({
            filterData: arrayFilter
        })
        console.log(arrayFilter);
    }


    render() {
        return (
            <>
                <Form >
                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label>Filter By Number Of Horns </Form.Label>
                        <Form.Control as="select" custom name='Horns' onChange={this.showHorns}>
                            <option value='All'>All</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>Wow</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

               
                {this.state.filterData.map(item => {
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