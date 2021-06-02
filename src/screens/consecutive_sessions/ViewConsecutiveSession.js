import React, { useState, useEffect } from "react";
import "./ViewConsecutiveSession.css";
import { useDispatch, useSelector } from "react-redux";
import { viewConsecutiveSessions } from "../../redux/consecutive/consecutiveAction";
import Search from "../home/Search";
import { db } from "../../firebase";

const ViewConsecutiveSession = () => {
  const [sessions, setSession] = useState([]);
  const dispatch = useDispatch();
  const { loading, error, consecutive_sessions } = useSelector(
    (state) => state.get_consecutiveSession
  );
  console.log("sessions", sessions);

  useEffect(() => {
    dispatch(viewConsecutiveSessions());
    return () => {};
  }, []);
  useEffect(() => {
    setSession(consecutive_sessions);
    return () => {};
  }, [consecutive_sessions]);

  const searchData = (name) => {
    if (name) {
      setSession(
        sessions.filter((data) =>
          data.lecture.toLowerCase().match(name.toLowerCase())
        )
      );
    } else {
      setSession(consecutive_sessions);
    }
  };
  return (
   
  );
};

export default ViewConsecutiveSession;
