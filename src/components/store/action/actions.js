import data from '../../../data.json';


export const GET_DATA = () => {
    return {
        type: 'GET_DETAILS',
        data: data
    }
}

export const NEXT_PAGE = () => {
    return {
        type: 'GO_FORWARD',
    }
}

export const PREVIOUS_PAGE = () => {
    return {
        type: 'GO_BACKWARD',
    }
}

export const SELECT_NO_OF_ROWS = (noOfRows) => {
    console.log(noOfRows);
    return {
        type: 'SELECT_ROWS',
        rowsCount: noOfRows
    }
}