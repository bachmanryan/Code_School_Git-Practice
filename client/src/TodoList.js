import React, {Component} from 'react'

class TodoList extends Component {
    render() {
        var forEachItem = this.props.arr.map(
            eachItem => {
                return (
                    <div>
                        <p>{eachItem.username}</p>
                        <p>{eachItem.todo}</p>
                        <p>{eachItem.isDone}</p>
                        <hr/>
                    </div>
                );
            }
        );

        return (

            <div>
                <h2> {forEachItem}</h2>
            </div>
        )
            ;
    }
}
export default TodoList;