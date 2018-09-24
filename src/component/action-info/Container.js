import ActionInfoView from "./component/ActionInfo";
import {connect} from "react-redux"
import Action from "../../Action";

const allTags = Object.values(Action.TAG).map(key => ({value: key, label: key}));

const mapStateToProps = () => ({
    allTags: allTags
})

const mapDispatchToProps = dispatch => ({
    onAddItem: item => dispatch({type: "ADD_ITEM", item: item}),
    onUpdateItem: item => dispatch({type: "UPDATE_ITEM", item: item})
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionInfoView)