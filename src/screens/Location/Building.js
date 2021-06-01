import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBuilding } from "../../redux/Building/BuildingAction";
import "./Building.css";
import { Spinner } from "../animations/Spinner";
import { DotLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import ScreenNav from "../screen-nav/ScreenNav";

const Building = () => {
  const history = useHistory();
  
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Building);
