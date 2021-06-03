import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Spinner } from "../animations/Spinner";
import { DotLoader } from "react-spinners";
import "./ParallelForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addParallelSessions } from "../../redux/parallel/parallelSessionAction";
import ParallelSessionInput from "./ParallelSessionInput";
import ParallelSessionError from "./ParallelSessionError";
const ParallelForm = ({ subject }) => {
  const [clicked, isClicked] = useState(false);
  const [success, setSuccess] = useState("Successfully Added");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.add_parallelSession);
  //start_time, duration, pdate, session

  const formik = useFormik({
    initialValues: {
      start_time: "",
      duration: "",
      pdate: "",
      session: [],
    },
    validationSchema: yup.object({
      start_time: yup.string().required("Please enter starting time"),
      duration: yup
        .number()
        .typeError("please enter number only")
        .required("please enter duration"),
      pdate: yup.date().required("please select any date.."),
      session: yup.array().required("please select any session"),
    }),
    onSubmit: (values, { resetForm }) => {
      isClicked(true);
      console.log("Values", values);
      dispatch(
        addParallelSessions(
          values.start_time,
          values.duration,
          values.pdate,
          values.session
        )
      );
      resetForm({ values: "" });
    },
  });
  return (
   
  );
};

export default ParallelForm;
