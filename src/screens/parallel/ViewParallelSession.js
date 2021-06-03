import React, { useState, useEffect } from "react";
import "./ViewParallelSession.css";
import { useDispatch, useSelector } from "react-redux";
import { viewParallelSessions } from "../../redux/parallel/parallelSessionAction";
import Search from "../home/Search";
import { db } from "../../firebase";

const ViewParallelSession = () => {
  const [sessions, setSession] = useState([]);
  const dispatch = useDispatch();
  const { loading, error, parallel_sessions } = useSelector(
    (state) => state.get_parallelSession
  );
  console.log("sessions", sessions);

  useEffect(() => {
    dispatch(viewParallelSessions());
    return () => {};
  }, []);
  useEffect(() => {
    setSession(parallel_sessions);
    return () => {};
  }, [parallel_sessions]);

  const searchData = (name) => {
    if (name) {
      setSession(
        sessions.filter(
          (data) =>
            data.pdate.split("-")[2].match(name) ||
            data.session.filter((subSession) =>
              subSession.toLowerCase().match(name.toLowerCase())
            ).length > 0
        )
      );
    } else {
      setSession(parallel_sessions);
    }
  };
  return (

  );
};

export default ViewParallelSession;
