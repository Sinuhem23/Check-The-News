import React, { Component } from 'react';
import '../CSS/comments.css';

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
    });
    this.setState({
      id: '',
      comment: '',
      thankYouMessage: 'Thanks for leaving a comment!',
    });
    // Setting a timer for the Thank You message
    const timer = setTimeout(() => {
      console.log('This will run after 3 second!');
      this.setState({
        thankYouMessage: '',
      });
    }, 3000);
    return () => clearTimeout(timer);
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
              <label htmlFor='comment'>Leave a comment </label>
              <textarea
                id='comment'
                onChange={this.handleChange}
                value={this.state.comment}
                type='text'
                required
              ></textarea>
              <button className='commentBtn' type='submit' value='Submit'>
                Submit
              </button>
            </form>
          </div>

          {/* Display List Container */}
          <div className='display_list_container'>
            <h2 className='container_title'>All Comments</h2>
            <div className='message_container'>
              <h3 className='thankYou'>{this.state.thankYouMessage}</h3>
            </div>
            {/* Map to iterate array */}
            <div className='ol_info'>
              {this.state.comments.map((mess, idx) => (
                <div className='cLi' key={idx}>
                  <div type='text' className='comment_display_container'>
                    <p className='messComment'> {' ' + mess.comment + ' '}</p>
                  </div>

                  <button
                    className='removeBtn'
                    onClick={() => this.delete(idx)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
