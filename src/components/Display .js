import React from 'react';
import ReactDOM from 'react-dom';

class Display extends React.Component {

    render() {
        let {result} = this.props;
   
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
}
}

export default Display;