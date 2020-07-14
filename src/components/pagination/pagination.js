import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/action/actions';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';

class PaginationTable extends Component {

    componentDidMount () {
       // console.log('mounted');
        //debugger;
        this.props.getData();
    }

    render () {
        let details = null
        let table= null
        let disable;
        let forwardButtonDisable;

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
            forwardButtonDisable = Math.floor(this.props.data.length/this.props.noOfRecords) === this.props.pagenumber ; 
        }
        
        
        return (
            this.props.data? 
            <Container>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Rows per page
                    </Dropdown.Toggle>

                    <Dropdown.Menu onClick={(event) => this.props.selectNoOfRows(event)}>
                        <Dropdown.Item href="#/5">5</Dropdown.Item>
                        <Dropdown.Item href="#/10">10</Dropdown.Item>
                        <Dropdown.Item href="#/15">15</Dropdown.Item>
                        <Dropdown.Item href="#/20">20</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {table}
                <Pagination>
                    <Pagination.First disabled={disable}/>
                    <Pagination.Prev onClick={this.props.previousPage} disabled={disable}/>
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>

                    <Pagination.Ellipsis disabled/>
                    <Pagination.Item>{Math.floor(this.props.data.length/this.props.noOfRecords)}</Pagination.Item>
                    <Pagination.Next onClick={this.props.nextPage} disabled={forwardButtonDisable}/>
                    <Pagination.Last disabled={forwardButtonDisable}/>
                </Pagination>
            </Container>: null
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        pageContent: state.pageContent,
        pagenumber: state.pagenumber,
        noOfRecords: state.noOfRecords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(actions.GET_DATA()),
        nextPage: () => dispatch(actions.NEXT_PAGE()),
        previousPage: () => dispatch(actions.PREVIOUS_PAGE()),
        selectNoOfRows: (event) => dispatch(actions.SELECT_NO_OF_ROWS(event.target.text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaginationTable);

