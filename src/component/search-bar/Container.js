import SearchBar from "./component/View";
import {connect} from "react-redux"

const mapDispatchToProps = dispatch => ({
    loadItems: payload => dispatch({type: "LOAD_ITEMS", payload: payload}),



    searching: (name) => dispatch({type: "FILTER", name: name}),
    filterByDate: (start, end) => dispatch({type:"FILTER_DATE", startDate: start, endDate: end})
})

export default connect(() => ({}), mapDispatchToProps)(SearchBar)
