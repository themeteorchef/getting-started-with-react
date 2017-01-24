import React from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';

export default class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'read' };
    this.setActiveClassOnTab = this.setActiveClassOnTab.bind(this);
    this.handleChangeTabs = this.handleChangeTabs.bind(this);
  }

  setActiveClassOnTab(tab) {
    return this.state.activeTab === tab ? 'active' : '';
  }

  handleChangeTabs(event) {
    this.setState({ activeTab: event.target.getAttribute('data-tab') });
  }

  render() {
    return (<div className="Books">
      <h4>{`${this.props.firstName}'s`} Books</h4>
      <AddBook />
      <ul className="tabs clearfix">
        <li onClick={ this.handleChangeTabs } className={`tab ${this.setActiveClassOnTab('read')}`} data-tab="read">Read</li>
        <li onClick={ this.handleChangeTabs } className={`tab ${this.setActiveClassOnTab('unread')}`} data-tab="unread">Unread</li>
      </ul>
      <div className="tabs-data">
        <BooksList
          type="read"
          books={ this.props.readBooks }
          isActive={ this.setActiveClassOnTab('read') }
        />
        <BooksList
          type="unread"
          books={ this.props.unreadBooks }
          isActive={ this.setActiveClassOnTab('unread') }
        />
      </div>
    </div>);
  }
}
