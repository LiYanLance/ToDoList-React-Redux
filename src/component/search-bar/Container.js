import SearchBar from "./component/View";
import {connect} from "react-redux"

const mapDispatchToProps = dispatch => ({
    searching: (name) => dispatch({type: "FILTER", name: name})
})

export default connect(() => {}, mapDispatchToProps)(SearchBar)
