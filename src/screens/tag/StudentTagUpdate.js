import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../animations/Spinner";
import { DotLoader, MoonLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import ScreenNav from "../screen-nav/ScreenNav";
import "./StudentTagUpdate.css";
import { UpdateTag } from "../../redux/tag/TagAction";
import useUpdate from "../useHooks/useUpdate";
const StudentTagUpdate = (props) => {
  console.log("props.history", props.location);
  const dispatch = useDispatch();
  const history = useHistory();
  const [tag, setTag] = useState("");
  const [clicked, isClicked] = useState(false);
  const [success, setSuccess] = useState("Successfully Updated");

  const { loading, error } = useSelector((state) => state.update_tag);

  useEffect(() => {
    if (!props.location.state) {
      history.replace({
        pathname: "/student/tag/view",
      });
    } else {
      setTag(props.location.state.tag);
    }
  }, []);

  const { submitHandler, clearInput } = useUpdate({
    updateData: UpdateTag,
    data: { inputData: tag, id: props.location.state?.id },
    setData: setTag,
    isClicked: isClicked,
  });

  const navData = [
    {
      id: 1,
      name: "TimeTable > ",
      pathname: "/",
    },
    {
      id: 2,
      name: "Student Tag> ",
      pathname: "/student/tag/add",
    },
    {
      id: 3,
      name: "view > ",
      pathname: "/student/tag/view",
    },
    {
      id: 4,
      name: "update",
      pathname: "/student/tag/update",
    },
  ];

  return (
  
  );
};

export default React.memo(StudentTagUpdate);
