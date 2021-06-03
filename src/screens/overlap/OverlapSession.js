import "./OverlapSession.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOverlapSession } from "../../redux/overlap/OverlapAction";
import { viewSessions } from "../../redux/session/sessionAction";
import { Spinner } from "../animations/Spinner";
import { DotLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import ScreenNav from "../screen-nav/ScreenNav";
import Select from "react-select";

const OverlapSession = () => {
  const dispatch = useDispatch();
  const [selectSessions, setSelectSession] = useState([]);
  const [sessionData, setSession] = useState([]);
  const [clicked, isClicked] = useState(false);
  const [success, setSuccess] = useState("Successfully Added");

  const { session } = useSelector((state) => state.get_Session);
  const { loading, error } = useSelector((state) => state.addOverlapReducer);

  useEffect(() => {
    dispatch(viewSessions());
  }, []);

  useEffect(() => {
    setSession(session);
  }, [session]);

 