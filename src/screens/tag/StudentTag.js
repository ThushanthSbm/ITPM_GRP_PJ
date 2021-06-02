import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addTag } from "../../redux/tag/TagAction";
import "./StudentTag.css";
import { Spinner } from "../animations/Spinner";
import { DotLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import useAdd from "../useHooks/useAdd";
import ScreenNav from "../screen-nav/ScreenNav";

const StudentTag = () => {
  const history = useHistory();
  const [tag, setTag] = useState("");
  const [clicked, isClicked] = useState(false);
  const [success, setSuccess] = useState("Successfully Added");
  const { loading, error } = useSelector((state) => state.tag_add);

  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  const { submitHandler, clearInput } = useAdd({
    addData: addTag,
    data: tag,
    setData: setTag,
    isClicked: isClicked,
  });

 
export default React.memo(StudentTag);
