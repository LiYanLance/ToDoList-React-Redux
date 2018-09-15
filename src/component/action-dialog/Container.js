import ActionDialogView from "./component/View";
import {connect} from "react-redux"

const mapStateToProps = (state) => ({
    items: state
})

export default connect(mapStateToProps)(ActionDialogView)