import { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  return data;
};

export default Data;
