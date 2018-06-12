import React from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions';

export class CommentBox extends React.Component {
  state = { comment: '' };

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={e => this.setState({ comment: e.target.value })} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { saveComment })(CommentBox);
