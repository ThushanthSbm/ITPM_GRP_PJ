import React, { useState, useEffect } from "react";
import "./ViewLecturer.css";
import ScreenNav from "../screen-nav/ScreenNav";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../animations/Spinner";
import { DotLoader, MoonLoader } from "react-spinners";
import { db } from "../../firebase";
import Search from "../home/Search";
import { useHistory } from "react-router-dom";
import {viewLecturer} from "../../redux/Lecturer/LecturerAction";

const ViewLecturer = () => {
  const { loading, error, lecturer } = useSelector(
      (state) => state.get_lecturers
  );
  const dispatch = useDispatch();
  const [lecturerData, setLecturerData] = useState([]);
  const [checkData, setCheckData] = useState([]);
  console.log("lecturers", lecturer);
  const history = useHistory();
  const navData = [
    {
      id: 1,
      name: "TimeTable > ",
      pathname: "/",
    },
    {
      id: 2,
      name: "Lecturer > ",
      pathname: "/lecturer/add",
    },
    {
      id: 3,
      name: "View ",
      pathname: "/lecturer/view",
    }
  ];

  useEffect(() => {
    dispatch(viewLecturer());
  }, []);

  useEffect(() => {
    setLecturerData(lecturer);
  }, [lecturer]);

  const Handlebox = (e) => {
    if (e.target.checked) {
      let tempData = [
        ...checkData,
        {
          id: e.target.value,
        },
      ];
      setCheckData(tempData);
    } else {
      setCheckData(checkData.filter((data) => data.id !== e.target.value));
    }

    console.log("checkData", checkData);
  };

  const DeleteAll = () => {
    db.collection("lecturers")
        .get()
        .then((res) => {
          res.forEach((element) => {
            element.ref.delete();
          });
        });
    setCheckData([]);
  };

  const DeleteSelected = () => {
    checkData.map((check_data) => {
      db.collection("lecturers").doc(check_data.id).delete();
    });
    setCheckData([]);
  };

  const handleDelete = (data) => {
    db.collection("lecturers").doc(data.id).delete();
    setCheckData(checkData.filter((e) => e.id !== data.id));
    console.log("checkData", checkData);
  };

  const searchData = (name) => {
    setCheckData([]);
    name?
        setLecturerData(
            lecturer.filter((data) => data.name.includes(name)||data.name.startsWith(name.toUpperCase())||data.emp_id.includes(name)
                                      ||data.center.startsWith(name.toUpperCase())||data.center.includes(name)
                                      ||data.faculty.startsWith(name.toUpperCase())||data.faculty.includes(name)
                                      ||data.department.startsWith(name.toUpperCase())||data.department.includes(name)
                                      ||data.building.startsWith(name.toUpperCase())||data.building.includes(name)
                                      ||data.level.startsWith(name)||data.building.includes(name))
        ):setLecturerData(
        lecturer
        )
  };

  const gotoUpdate = (data) => {
    history.push({
      pathname: "/lecturer/update",
      state: data,
    });
  };

  return (
      <div className="LecturerViewContainer">
        <div className="LecturerViewContainer__nav">
          <ScreenNav rightNavData={navData} />
        </div>
        <div className="container table-responsive-lg ">
          {loading ? (
              <Spinner Loader={DotLoader} size={30} />
          ) : (
              <React.Fragment>
                <div className="LecturerViewContainer__top">
                  <button
                      onClick={(e) =>
                          history.push({
                            pathname: "/lecturer/add",
                          })
                      }
                      className="btn btn-dark btn_new"
                
export default ViewLecturer;
