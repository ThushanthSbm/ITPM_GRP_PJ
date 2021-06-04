import React, { useState, useEffect } from "react";
import "./StudentView.css";
import ScreenNav from "../screen-nav/ScreenNav";
import { useDispatch, useSelector } from "react-redux";
import { viewTag } from "../../redux/tag/TagAction";
import { Spinner } from "../animations/Spinner";
import { DotLoader } from "react-spinners";
import { db } from "../../firebase";
import Search from "../home/Search";
import StudentTagTable from "./StudentTagTable";
import { useHistory } from "react-router-dom";
const StudentView = () => {
  const { loading, error, tags } = useSelector((state) => state.get_tag);
  const new_tags = tags.map((data) => {
    return { ...data, isChecked: false };
  });

  //   console.log("new_yearSemo", new_yearSemi);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [checkData, setCheckData] = useState([]);
  //   console.log("year and semi", year_semi);
  const history = useHistory();
  const navData = [
    {
      id: 1,
      name: "TimeTable > ",
      pathname: "/",
    },
    {
      id: 2,
      name: "Student Tag > ",
      pathname: "/student/tag/add",
    },
    {
      id: 3,
      name: "view",
      pathname: "/student/tag/view",
    },
  ];

  useEffect(() => {
    dispatch(viewTag());
  }, []);

  useEffect(() => {
    setUserData(new_tags);
  }, [tags]);

  const Handlebox = (e, data) => {
    if (e.target.checked) {
      data.isChecked = true;
      let tempData = [
        ...checkData,
        {
          id: e.target.value,
        },
      ];
      setCheckData(tempData);
    } else {
      data.isChecked = false;
      setCheckData(checkData.filter((data) => data.id !== e.target.value));
    }

    console.log("checkData", checkData);
  };

  const DeleteAll = () => {
    db.collection("tags")
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
      db.collection("tags").doc(check_data.id).delete();
    });
    setCheckData([]);
  };

  const handleDelete = (data) => {
    db.collection("tags").doc(data.id).delete();
    setCheckData(checkData.filter((e) => e.id !== data.id));
    console.log("checkData", checkData);
  };

  const searchData = (name) => {
    console.log("Name Chanage", name);
    setUserData(
      tags.map((data) => {
        return { ...data, isChecked: false };
      })
    );
    setCheckData([]);

    if (name) {
      setUserData(
        new_tags.filter((data) =>
          data.tag.toLowerCase().match(name.toLowerCase())
        )
      );
    } else {
      setUserData(new_tags);
    }
  };

  const gotoUpdatePage = (data) => {
    history.push({
      pathname: "/student/tag/update",
      state: data,
    });
  };

  return (
    
  );
};

export default StudentView;
