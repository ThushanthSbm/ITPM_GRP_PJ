import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addSubgroupId } from "../../redux/subgroupId/SubGroupIdAction";
import "./StudentSubGroupId.css";
import { Spinner } from "../animations/Spinner";
import { DotLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import useAdd from "../useHooks/useAdd";
import ScreenNav from "../screen-nav/ScreenNav";

const StudentSubGroupId = () => {
  const history = useHistory();
  const [sub_groupId, setSubGroupId] = useState("");
  const [clicked, isClicked] = useState(false);
  const [success, setSuccess] = useState("Successfully Added");
  const { loading, error } = useSelector((state) => state.sub_groupId_add);

  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  const { submitHandler, clearInput } = useAdd({
    addData: addSubgroupId,
    data: sub_groupId,
    setData: setSubGroupId,
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
      name: "Student SubGroup Number",
      pathname: "/student/subgroup_id/add",
    },
  ];

  return (
    
  );
};

export default React.memo(StudentSubGroupId);
