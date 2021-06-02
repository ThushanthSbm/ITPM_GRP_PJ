import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSuitableGroupId } from "../../redux/suitableGroupId/SuitableGroupIdAction";
import { view_genGroupId } from "../../redux/genId/genIdAction";
import { view_genSubGroupId } from "../../redux/gensubId/genSubIdAction";
import { viewRoom } from "../../redux/Room/RoomAction";
import "./SuitableGroupId.css";
import { Spinner } from "../animations/Spinner";
import { DotLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import ScreenNav from "../screen-nav/ScreenNav";
import Select from "react-select";

const SuitableGroupId = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [groupid_data, setGroupIds] = useState([]);
  const [subgroupid, setSubgroupId] = useState([]);
  const [room_data, setRooms] = useState("");
  const [selectGroupId, setSelectGroupId] = useState([]);
  const [selectSubGroupId, setSelectSubGroupId] = useState([]);
  const [selectRoom, setSelectRoom] = useState([]);
  const [clicked, isClicked] = useState(false);
  const [success, setSuccess] = useState("Successfully Added");
  const [type, setType] = useState("");
  const { loading, error, suitableGroupId } = useSelector(
    (state) => state.addSuitableGroupId
  );
  const { room } = useSelector((state) => state.get_room);
  const { gen_groupids } = useSelector((state) => state.get_genGroupId);
  const { gen_subgroupids } = useSelector((state) => state.get_genSubGroupId);

  useEffect(() => {
    dispatch(viewRoom());
    dispatch(view_genGroupId());
    dispatch(view_genSubGroupId());
  }, []);

  useEffect(() => {
    setRooms(room);
    setGroupIds(gen_groupids);
    setSubgroupId(gen_subgroupids);
  }, [room, gen_groupids, gen_subgroupids]);

  const room_options = room.map((data) => {
    console.log(data);
    return {
      value: data.room.name,
      label: data.room.name,
    };
  });

  const groupid_options = gen_groupids.map((data) => {
    console.log(data);
    return {
      value: data.gen_groupid,
      label: data.gen_groupid,
    };
  });

  const sub_groupid_options = gen_subgroupids.map((data) => {
    console.log(data);
    return {
      value: data.gen_subgroupid,
      label: data.gen_subgroupid,
    };
  });

  const navData = [
    {
      id: 1,
      name: "TimeTable > ",
      pathname: "/",
    },
    {
      id: 2,
      name: "SuitableGroupId",
      pathname: "/SuitableGroupId/add",
    },
  ];

  const handleGroupIdChange = (optionValue) => {
    setSelectGroupId(optionValue);
  };
  const handleRoomChange = (optionValue) => {
    setSelectRoom(optionValue);
    // console.log(optionValue);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(selectRoom);
    dispatch(
      addSuitableGroupId({
        selectRoom,
        selectGroupId,
      })
    );
  };

  const setCurrentType = () => {
    if (type === "groupId") {
      return groupid_options;
    } else if (type === "subGroupId") {
      return sub_groupid_options;
    }
  };
  return (

  );
};

export default React.memo(SuitableGroupId);
