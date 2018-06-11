import React from 'react';

export default class CommentBox extends React.Component {
  state = { comment: '' };

  handleSubmit = e => {
    e.preventDefault();

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
