import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import classNames from "classnames";
import readed from "../../assets/img/readed.svg";
import noReaded from "../../assets/img/noReaded.svg";

import "./Message.scss";

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments }) => (
  <div className={classNames("message", { "message--isme": isMe })}>
    <div className="message__content">
      {isMe && isReaded ? (
        <img src={readed} alt="Readed icon" className="message__icon-readed" />
      ) : (
        <img
          src={noReaded}
          alt="Not readed icon"
          className="message__icon-readed message__icon-readed--no"
        />
      )}
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`} className="avatar" />
      </div>
      <div className="message__info">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        {attachments && (
          <div className="message__attachments">
            {attachments.map((item) => (
              <div className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
          </div>
        )}
        <span className="message__date">
          {formatDistanceToNow(date, { addSuffix: true, locale: ru })}
        </span>
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
};

export default Message;
