import SearchBar from "./component/View";
import {connect} from "react-redux"

const mapDispatchToProps = dispatch => ({
    searching: (name) => dispatch({type: "FILTER", name: name}),
    filterByDate: (start, end) => dispatch({type:"FILTER_DATE", startDate: start, endDate: end})
})

export default connect(() => {}, mapDispatchToProps)(SearchBar)
