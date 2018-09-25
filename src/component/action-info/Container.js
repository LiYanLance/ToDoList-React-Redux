import ActionInfoView from "./component/ActionInfo";
import {connect} from "react-redux"
import {addTodosToTodoService, updateTodosToTodoService, getTagsFromTodoService} from "../../api/todoService";

const convertTag = (tags) =>  tags.map(tag => ({value: tag.name, label: tag.name}));

function convertDate(timestamp) {
    const date = new Date(timestamp);
    return [
        date.getFullYear(),
        ("0" + (date.getMonth() + 1)).slice(-2),
        ("0" + date.getDate()).slice(-2)
    ].join('-');
}

const mapStateToProps = ({tags}) => ({
    allTags: convertTag(tags || [])
})

const mapDispatchToProps = dispatch => ({
    loadTags: () => getTagsFromTodoService(dispatch),
    onAddItem: (todo) => addTodosToTodoService(dispatch, todo),
    onUpdateItem: (todo) => updateTodosToTodoService(dispatch, todo),
    convertDate: timestamp => convertDate(timestamp)
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionInfoView)