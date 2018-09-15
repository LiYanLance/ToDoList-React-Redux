import ActionInfoView from "./component/View";
import {connect} from "react-redux"

const mapStateToProps = (state) => ({
    items: state
})

const mapDispatchToProps = dispatch => ({
    onAddItem: item => dispatch({type: "ADD_ITEM", item: item}),
    onUpdateItem : item => dispatch({type: "UPDATE_ITEM", item: item})
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionInfoView)