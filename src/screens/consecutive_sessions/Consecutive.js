import React, { useState, useEffect } from "react";
import "./Consecutive.css";
import { Spinner } from "../animations/Spinner";
import { PropagateLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import ScreenNav from "../screen-nav/ScreenNav";
import { viewSessions } from "../../redux/session/sessionAction";
import ConsecutiveForm from "./ConsecutiveForm";

import ViewConsecutiveSession from "./ViewConsecutiveSession";

const Consecutive = () => {
  const [sessionData, setSessionData] = useState([]);
  const dispatch = useDispatch();

  const { session } = useSelector((state) => state.get_Session);
  useEffect(() => {
    dispatch(viewSessions());
  }, []);

  useEffect(() => {
    setSessionData(session);
  }, [session]);
  const navData = [
    {
      id: 1,
      name: "TimeTable > ",
      pathname: "/",
    },
    {
      id: 2,
      name: "Consecutive sessions",
      pathname: "/consecutive",
    },
  ];

  return (
    
  );
};

export default Consecutive;
