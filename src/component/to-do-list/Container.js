import View from "./component/View";
import {connect} from "react-redux"

const mapStateToProps = (state) => ({
    items: state
})

const mapDispatchToProps = dispatch => ({
    onDeleteItem: id => dispatch({type: "REMOVE_ITEM", id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(View)
