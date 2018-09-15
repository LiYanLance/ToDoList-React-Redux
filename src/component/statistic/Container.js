import Statistic from "./component/View";
import {connect} from "react-redux"

// const mapStateToProps = (state) => ({
//     items: state
// })

// const mapDispatchToProps = dispatch => ({
//     filter: name => dispatch({type:"FILTER_ITEM", name: name})
// })
//
//
// const mapStateToProps = (state) => ({
//     items: state
// })


export default connect()(Statistic)