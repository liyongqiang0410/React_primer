import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Tag, Divider } from "antd";

function List(props) {
  const tagClose = (id) => {
    return () => {
      props.deleteOneList(id);
    };
  };
  return (
    <Fragment>
      <Divider></Divider>
      <ul>
        {props.list.map((item) => {
          return (
            <Tag key={item.id} closable onClose={tagClose(item.id)}>
              {item.label}
            </Tag>
          );
        })}
      </ul>
    </Fragment>
  );
}

List.propTypes = {
  List: PropTypes.array,
};

export default List;
