import SearchBar from "./component/View";
import {connect} from "react-redux"
import {searchTodosFromTodoService} from "../../api/todoService";

const mapDispatchToProps = dispatch => ({
    filter: (name, startDate, endDate) => searchTodosFromTodoService(dispatch, name, startDate, endDate)
})

export default connect(() => ({}), mapDispatchToProps)(SearchBar)
