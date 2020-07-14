import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/action/actions';
import classes from './pagination.module.css'

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
                    return <tr key={current.appId}>
                            <td>{current.appId}</td>
                            <td>{current.downloadBytes}</td>
                            <td>{current.sessionsCount}</td>
                        </tr>
                })
            )
            table = <table>
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
                    </table>   
            disable = this.props.pagenumber ===1? true: false
            forwardButton = Math.floor(this.props.data.length/5) === this.props.pagenumber ; 
        }
        
        
        return (
            this.props.data? <div>
                <span>No of rows per page </span>
                <select>
                    <option value={5} selected>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                {table}
                <button onClick={this.props.previousPage} disabled={disable}>{symbol}</button>
                <span>page number {this.props.pagenumber}</span>
                <button onClick={this.props.nextPage} disabled={forwardButton}>></button>
            </div>: null
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

