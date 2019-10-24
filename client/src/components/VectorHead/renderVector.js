import React from 'react';
// import './renderVector.css';
import VectorHead from './utils';

class RenderVector extends React.Component {

  componentDidMount() {
    var vectorHead = new VectorHead();
  }

  render() {
    return (
    <div className="renderHead">
      <canvas>
        < newVectorHead/>
      </canvas>

    </div>
    );
  }
}

export default RenderVector;
