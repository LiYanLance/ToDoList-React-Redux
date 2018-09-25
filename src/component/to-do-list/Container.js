import View from "./component/View";
import {connect} from "react-redux"
import withAuthentication from '../../hoc/withAuthentication'
import {sortFromTodoService, getTodosFromTodoService, deleteTodosFromTodoService} from "../../api/todoService";
import {} from "../../api/todoService";

function convertDate(timestamp) {
    const date = new Date(timestamp);
    return [
        date.getFullYear(),
        ("0" + (date.getMonth() + 1)).slice(-2),
        ("0" + date.getDate()).slice(-2)
    ].join('-');
}

const mapStateToProps = ({items, isAuthenticated}) => ({
    token: isAuthenticated,
    items: items
})

const mapDispatchToProps = dispatch => ({
    loadItems: (number, todos) => getTodosFromTodoService(dispatch, number, todos),
    onSort: (field, direction) => sortFromTodoService(field, direction, dispatch),
    onDeleteItem: id => deleteTodosFromTodoService(dispatch, id),
    convertDate: (timestamp) => convertDate(timestamp)
})

export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(View))