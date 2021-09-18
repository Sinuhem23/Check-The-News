import React, { Component } from 'react';
import '../CSS/comments.css';
/*  
Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
Add some style to your app
*/
export class Comments extends Component {
  state = {
    comments: [],

    thankYouMessage: '',
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.state.comments.push({
      id: this.state.comments.length,
      comment: this.state.comment,
      thankYouMessage: 'Thanks for leaving a comment!',
    });
    this.setState({
      id: '',
      comment: '',
    });
    console.log(this.state.comments);
    // });
  };

  delete = (id) => {
    this.setState({
      comments: this.state.comments.filter((comment) => {
        return comment.id !== id;
      }),
    });
    this.state.comments.splice(id);
    // console.log(this.state.comments);
    this.setState({});
    // }
  };

  componentDidMount() {
    console.log('Mounted');
  }

  render() {
    return (
      <div>
        <h1 className='comment_title'>Comments</h1>
        <div className='all_comment__container'>
          {/* Form Container */}

          <div className='form_container'>
            <form id='input_form' onSubmit={this.handleSubmit}>
              <label htmlFor='comment'>Leave a comment</label>
              <input
                id='comment'
                onChange={this.handleChange}
                value={this.state.comment}
                type='text-area'
                required
              />
              <button type='submit' value='Submit'>
                Submit
              </button>
            </form>
          </div>

          {/* Display List Container */}
          <div className='display_list_container'>
            <h2 className='container_title'>All Comments</h2>

            {/* Map to iterate */}
            <div>
              <ol className='ol_info'>
                {this.state.comments.map((mess, idx) => (
                  <li key={idx}>
                    Comments: {' ' + mess.comment + ' '}
                    <button onClick={() => this.delete(idx)}>Remove</button>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {/* Checkout Container */}
          <div className='message_container'>
            <h3 className='thankYou'>{this.state.thankYouMessage}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;