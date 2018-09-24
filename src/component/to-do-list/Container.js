import View from "./component/View";
import {connect} from "react-redux"
import withAuthentication from '../../hoc/withAuthentication'

function convertDate(timestamp) {
    const date = new Date(timestamp);
    return [
        date.getFullYear(),
        ("0" + (date.getMonth() + 1)).slice(-2),
        ("0" + date.getDate()).slice(-2)
    ].join('-');                                  // Glue the pieces together
}

// const filterVisibleItems = (items) => {
//     return items.filter(item => !item.hasOwnProperty("isVisible") || item.isVisible === true)
// }


const mapStateToProps = ({items, isAuthenticated}) => ({
    // logged: isAuthenticated.authorization,
    token: isAuthenticated,
    // items: filterVisibleItems(items)
    items: items
})

const mapDispatchToProps = dispatch => ({
    loadItems: payload => dispatch({type: "LOAD_ITEMS", payload: payload}),
    onDeleteItem: id => dispatch({type: "REMOVE_ITEM", id: id}),
    sortItemsAsc: field => dispatch({type: "ASC", field: field}), //fieldAscSort(filterVisibleItems(items), field),
    sortItemsDesc: field => dispatch({type: "DESC", field: field}), //fieldDescSort(filterVisibleItems(items), field)
    convertDate: (timestamp) => convertDate(timestamp)
})

// export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(View))
export default connect(mapStateToProps, mapDispatchToProps)(View)
