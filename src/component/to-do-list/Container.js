import View from "./component/View";
import {connect} from "react-redux"

const mapStateToProps = (state) => ({
    items: state.filter(item => !item.hasOwnProperty("isVisible") || item.isVisible === true)
})

const mapDispatchToProps = dispatch => ({
    onDeleteItem: id => dispatch({type: "REMOVE_ITEM", id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(View)
