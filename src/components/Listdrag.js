import React, { Component } from 'react'
const ReactDragListView = require('react-drag-listview');

export default class Demo extends Component {
    constructor(props) {
        super(props);

        const data = [];
        for (let i = 1, len = 7; i < len; i++) {
            data.push({
                title: `rows${i}`
            });
        }

        this.state = {
            data
        };
    }

    render() {
        const that = this;
        const dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const data = that.state.data;
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                that.setState({ data });
            },
            nodeSelector: 'li',
            handleSelector: 'a'
        };

        return (
            <div>
                <ReactDragListView {...dragProps}>
                    <ol>
                        {this.state.data.map((item, index) => (
                            <li key={index}>
                                {item.title}
                                <a href="#">Drag</a>
                            </li>
                        ))}
                    </ol>
                </ReactDragListView>
            </div>

        );
    }
}

