import View from "./component/View";
import {connect} from "react-redux"

const mapStateToProps = (state) => ({
    items: state
})

const mapDispatchToProps = dispatch => ({
    onAddItem: item => dispatch({type: "ADD_ITEM", item})
})

export default connect(mapStateToProps, mapDispatchToProps)(View)