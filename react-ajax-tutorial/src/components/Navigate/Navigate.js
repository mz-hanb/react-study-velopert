import React from 'react'; 
import {Button} from 'semantic-ui-react';
import './Navigate.css';

const Navigate = ({postId, disabled, onClick}) => (
  <div className="navigate">
    <Button
      color="teal"
      content="Previous"
      icon="left arrow"
      labelPosition="left"
      disabled={disabled}
      onClick={
        () => onClick('PREV')
      }
    >
    </Button>
    <div className="Navigate-page-num">{postId}</div>
    <Button
      color="teal"
      content="Next"
      icon="right arrow"
      labelPosition="right"
      className="Navigate-right-button"
      disabled={disabled}
      onClick={
        () => onClick('NEXT')
      }
    >
    </Button>
  </div>
)

export default Navigate;

