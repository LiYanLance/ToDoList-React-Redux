import View from "./component/View";
import {connect} from "react-redux"
import withAuthentication from '../../hoc/withAuthentication'

const filterVisibleItems = (items) => {return items.filter(item => !item.hasOwnProperty("isVisible") || item.isVisible === true)}

const mapStateToProps = ({items, isAuthenticated}) => ({
    logged: isAuthenticated,
    items: filterVisibleItems(items)
})

const mapDispatchToProps = dispatch => ({
    onDeleteItem: id => dispatch({type: "REMOVE_ITEM", id: id}),
    sortItemsAsc: field => dispatch({type: "ASC", field: field}), //fieldAscSort(filterVisibleItems(items), field),
    sortItemsDesc: field => dispatch({type: "DESC", field: field})//fieldDescSort(filterVisibleItems(items), field)
})

export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(View))
