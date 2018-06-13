import React from 'react';
import { connect } from 'react-redux';

export class CommentList extends React.Component {
  renderComments = () => {
    return this.props.comments.map(comment => (
      <li key={comment}>{comment}</li>
    ));
  };

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({ comments: state.comments }))(CommentList);
