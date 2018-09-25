import ActionInfoView from "./component/ActionInfo";
import {connect} from "react-redux"
import Action from "../../Action";

// const allTags = Object.values(Action.TAG).map(key => ({value: key, label: key}));
const convertTag = (tags) =>  tags.map(tag => ({value: tag.name, label: tag.name}));

function convertDate(timestamp) {
    const date = new Date(timestamp);
    return [
        date.getFullYear(),
        ("0" + (date.getMonth() + 1)).slice(-2),
        ("0" + date.getDate()).slice(-2)
    ].join('-');                                  // Glue the pieces together
}


const mapStateToProps = ({tags}) => ({
    allTags: convertTag(tags || [])
})

const mapDispatchToProps = dispatch => ({
    loadItems: payload => dispatch({type: "LOAD_ITEMS", payload: payload}),
    loadTags: payload => dispatch({type: "LOAD_TAGS", payload: payload}),


    convertDate: timestamp => convertDate(timestamp),
    onAddItem: item => dispatch({type: "ADD_ITEM", item: item}),
    onUpdateItem: item => dispatch({type: "UPDATE_ITEM", item: item})
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionInfoView)