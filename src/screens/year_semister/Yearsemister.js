import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addSemisterYear } from "../../redux/Year_semi/YearAction";
import "./Yearsemister.css";
import { Spinner } from "../animations/Spinner";
import { DotLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import useAdd from "../useHooks/useAdd";
import ScreenNav from "../screen-nav/ScreenNav";

const Yearsemister = () => {
  const history = useHistory();
  const [year, setYear] = useState("");
  const [clicked, isClicked] = useState(false);
  const [success, setSuccess] = useState("Successfully Added");
  const { loading, error } = useSelector((state) => state.year_semister);

  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  const { submitHandler, clearInput } = useAdd({
    addData: addSemisterYear,
    data: year,
    setData: setYear,
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
      name: "Student Semister",
      pathname: "/student/year_semister/add",
    },
  ];

  return (

  );
};

export default React.memo(Yearsemister);
