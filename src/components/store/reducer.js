const initialState = {
    data: null,
    pageContent: null,
    pagenumber: 1,
    noOfRecords: 5
}

const reducer = ((state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return {
                ...state,
                data: action.data.content,
                pageContent: action.data.content.slice(0,state.noOfRecords),
            }
        case 'GO_FORWARD':
            let page = {...state}
            let pageNo = page.pagenumber+1;
            page.pagenumber = pageNo;
            page.pageContent = page.data.slice((pageNo*(page.noOfRecords))-page.noOfRecords, (pageNo*(page.noOfRecords)))
            return {
                ...state,
                pageContent: page.pageContent,
                pagenumber: page.pagenumber
            }
        case 'GO_BACKWARD':
            let pageBack = {...state}
            let pageNoBack = pageBack.pagenumber-1;
            pageBack.pagenumber = pageNoBack;
            pageBack.pageContent = pageBack.data.slice((pageNoBack*(pageBack.noOfRecords))-pageBack.noOfRecords, (pageNoBack*(pageBack.noOfRecords)))
            return {
                ...state,
                pageContent: pageBack.pageContent,
                pagenumber: pageBack.pagenumber
            }
        case 'SELECT_ROWS':
            let data = {...state}
            let startValue = data.noOfRecords*data.pagenumber-data.noOfRecords;
            let endValue = startValue+parseInt(action.rowsCount);
            console.log(startValue, endValue);
            data.pageContent = data.data.slice(startValue, endValue)
            console.log(data.pageContent);
            return {
                ...data,
                noOfRecords: action.rowsCount,
            }
        default :
            return state
    }
});

export default reducer;

