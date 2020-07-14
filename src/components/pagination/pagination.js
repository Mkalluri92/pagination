import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/action/actions';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'

class Pagination extends Component {

    componentDidMount () {
        console.log('mounted');
        //debugger;
        this.props.getData();
    }

    render () {
        let details = null
        let table= null
        let disable;
        let forwardButton;
        let symbol = "<";

        if (this.props.data) {
            details = (
                this.props.pageContent.map(current => {
                    return (<tr key={current.appId}>
                            <td>{current.appId}</td>
                            <td>{current.downloadBytes}</td>
                            <td>{current.sessionsCount}</td>
                        </tr>)
                })
            )
            table = <Table bordered striped hover responsive>
                        <thead>
                            <tr>
                                <th>App Id</th>
                                <th>download Bytes</th>
                                <th>sessionsCount</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {details}
                        </tbody>
                    </Table>   
            disable = this.props.pagenumber ===1? true: false
            forwardButton = Math.floor(this.props.data.length/5) === this.props.pagenumber ; 
        }
        
        
        return (
            this.props.data? <Container>
                <span>No of rows per page </span>
                <select>
                    <option value={5} defaultValue>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                {table}
                <Button onClick={this.props.previousPage} disabled={disable}>{symbol}</Button>
                <span>page number {this.props.pagenumber}</span>
                <Button onClick={this.props.nextPage} disabled={forwardButton}>></Button>
            </Container>: null
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        pageContent: state.pageContent,
        pagenumber: state.pagenumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(actions.GET_DATA()),
        nextPage: () => dispatch(actions.NEXT_PAGE()),
        previousPage: () => dispatch(actions.PREVIOUS_PAGE())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pagination);

