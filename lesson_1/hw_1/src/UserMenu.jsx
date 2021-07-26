import React from "react";
import { UserDataContext } from "./usersData-context";

class UserMenu extends React.Component {
  render() {
    return (
      <div className='menu'>
        <span className='menu__greeting'>Hello, Nikola Tesla</span>
        <img
          alt='User Avatar'
          src='https://avatars3.githubusercontent.com/u10001'
          className='menu__avatar'
        />
      </div>
    );
  }
}

UserMenu.contextType = UserDataContext;

export default UserMenu;
