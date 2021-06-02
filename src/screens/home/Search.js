import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";
const Search = ({ searchData }) => {
  return (

          <SearchIcon
            className="search_icon"
            onClick={() => {
              console.log("Clicked..");
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Search);
