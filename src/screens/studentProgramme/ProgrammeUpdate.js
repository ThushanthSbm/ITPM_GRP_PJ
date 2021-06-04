import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../animations/Spinner";
import { DotLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import ScreenNav from "../screen-nav/ScreenNav";
import "./ProgrammeUpdate.css";
import { UpdateProgramme } from "../../redux/programme/programmeAction";
import useUpdate from "../useHooks/useUpdate";
const ProgrammeUpdate = (props) => {
  console.log("props.history", props.location);
  const dispatch = useDispatch();
  const history = useHistory();
  const [programme, setProgramme] = useState("");
  const [clicked, isClicked] = useState(false);
  const [success, setSuccess] = useState("Successfully Updated");

  const { loading, error } = useSelector((state) => state.update_programme);

  useEffect(() => {
    if (!props.location.state) {
      history.replace({
        pathname: "/student/programme/view",
      });
    } else {
      setProgramme(props.location.state.programme);
    }
  }, []);

  const { submitHandler, clearInput } = useUpdate({
    updateData: UpdateProgramme,
    data: { inputData: programme, id: props.location.state?.id },
    setData: setProgramme,
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
      name: "Student Programme> ",
      pathname: "/student/programme/add",
    },
    {
      id: 3,
      name: "view > ",
      pathname: "/student/programme/view",
    },
    {
      id: 4,
      name: "update",
      pathname: "/student/programme/update",
    },
  ];

  return (
    
  );
};

export default React.memo(ProgrammeUpdate);
