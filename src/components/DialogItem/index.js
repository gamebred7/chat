import React from "react";
import { Time, IconReaded } from "../";
import classNames from "classnames";

import "./DialogItem.scss";

const getAvatar = (avatar) => {
  if (avatar) {
    return (
      <img
        src="https://source.unsplash.com/100x100/?random-1&nature,water"
        alt=""
      />
    );
  } else {
    //make avatar
  }
};

const DialogItem = ({ user, messsage, unreaded }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline,
    })}
  >
    <div className="dialogs__item-avatar">
      {getAvatar("https://source.unsplash.com/100x100/?random-1&nature,water")}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Федор Достоевский</b>
        <span className="message__date">
          {/* <Time date={new Date(2021, 6, 3)} /> */}
          13:03
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          If you wanna be the the best, you gotta beat the best, and the best is
          blessed babyyyyyy
        </p>
        <IconReaded isMe={true} isReaded={true} />
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">
            {unreaded > 9 ? "+9" : unreaded}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
