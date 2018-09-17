import React, {Component} from 'react'

class TodoList extends Component {
    render() {
        var forEachItem = this.props.arr.map(
            eachItem => {

                // var toUseLater =

                return (
                    <div>
                        <p>{eachItem._id}</p>
                        <p>{eachItem.username}</p>
                        <p>{eachItem.todo}</p>
                        <p>{eachItem.isDone}</p>
                        <button onClick={() => this.props.deleteFunction(eachItem._id)}>Delete</button>
                        <hr/>
                    </div>
                );
            }
        );

        return (

            <div>
                <h2>{forEachItem}</h2>
            </div>
        );
    }
}
export default TodoList;