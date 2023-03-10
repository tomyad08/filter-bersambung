import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addKasus, addMeninggal } from "../Lib/DataSlice";

const DataSet = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://data.jabarprov.go.id/api-backend/bigdata/dinkes/od_17308_jml_kasus_demam_berdarah_dengue_dbd__jk"
      )
      .then((res) => {
        dispatch(addKasus(res.data.data));
      });
  }, [dispatch]);

  return <div></div>;
};
export default DataSet;
