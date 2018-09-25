import View from "./components/View";
import {connect} from "react-redux"
import withAuthentication from '../../hoc/withAuthentication'

const mapStateToProps = ({items, isAuthenticated}) => ({
    items: items.content || [],
    token: isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    onUpdateItem : newItem => dispatch({type: "UPDATE_ITEM", item: newItem}),
})

export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(View))