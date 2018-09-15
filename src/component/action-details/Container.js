import View from "./components/View";
import {connect} from "react-redux"

const mapStateToProps = (state) => ({
    items: state
})

const mapDispatchToProps = dispatch => ({
    onUpdateItem : newItem => dispatch({type: "UPDATE_ITEM", item: newItem}),
})

export default connect(mapStateToProps, mapDispatchToProps)(View)