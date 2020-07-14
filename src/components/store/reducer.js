const initialState = {
    data: null,
    pageContent: null,
    pagenumber: 0,
    noOfRecords: 5
}

const reducer = ((state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return {
                ...state,
                data: action.data.content,
                pageContent: action.data.content.slice(1,6),
                pagenumber: 1
            }
        case 'GO_FORWARD':
            let page = {...state}
            let pageNo = page.pagenumber+1;
            page.pagenumber = pageNo;
            page.pageContent = page.data.slice((pageNo*5)-5, (pageNo*5)+1)
            return {
                ...state,
                pageContent: page.pageContent,
                pagenumber: page.pagenumber
            }
        case 'GO_BACKWARD':
            let pageBack = {...state}
            let pageNoBack = pageBack.pagenumber-1;
            pageBack.pagenumber = pageNoBack;
            pageBack.pageContent = pageBack.data.slice(pageNoBack*5-5, pageNoBack*5+1)
            return {
                ...state,
                pageContent: pageBack.pageContent,
                pagenumber: pageBack.pagenumber
            }
        default :
            return state
    }
});

export default reducer;

