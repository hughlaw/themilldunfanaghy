import React from 'react'

class BookButton extends React.Component {

  onBook() {
    window.open('https://bookingengine.myguestdiary.com/1184', 'mill_room_booking');
  }

  render() {
    let className = this.props.variant ? `button ${this.props.variant}` : `button`;
    return (
    <button type="button" className={className} onClick={this.onBook}>Book a room</button>
    )
  }
}

export default BookButton