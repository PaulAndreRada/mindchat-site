import React, {Component} from 'react';
import styled from 'styled-components';

const Highlight = styled.span`
  //color: #FA88C4;
  //font-family: "HelveticaNeue-bold", "Helvetica Neue bold", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  //font-weight: 500;
`

class HL extends Component {
  render(){
    return(
      <Highlight>{this.props.children}</Highlight>
    )
  }
}

export default HL;
