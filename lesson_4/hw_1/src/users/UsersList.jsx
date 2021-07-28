import React from "react";
import { connect } from "react-redux";
import * as userActions from "./users.actions";
import Pagination from "./Pagination.jsx";
import User from "./User.jsx";

class UsersList extends React.Component {
  goPrev = () => {
    this.props.prevPage();
  };

  goNext = () => {
    this.props.nextPage();
  };

  render() {
    const { currentPage, usersList } = this.props.users;

    const userPerPage = 3;

    const startIndex = (currentPage - 1) * userPerPage;
    const endIndex = startIndex + userPerPage;
    const usersToDisplay = usersList.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={usersList.length}
          itemsPerPage={userPerPage}
        />
        <ul className='users'>
          {usersToDisplay.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    users: {
      usersList: state.usersList,
      currentPage: state.currentPage,
    },
  };
};

const mapDispatch = {
  nextPage: userActions.nextPage,
  prevPage: userActions.prevPage,
};

const connector = connect(mapState, mapDispatch);

const connectedUsersList = connector(UsersList);

export default connectedUsersList;
