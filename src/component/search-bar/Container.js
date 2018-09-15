import SearchBar from "./component/View";
import {connect} from "react-redux"

// function filterData(state) {
//     return state.filter(item => item.id >= 3)
// }

const mapStateToProps = (state) => ({
    items: state
})

// const mapDispatchToProps = dispatch => ({
//     actionFilter: name => dispatch({type:"FILTER_ITEM", name: name})
// })


export default connect(mapStateToProps)(SearchBar)
