import React, {useEffect, useState} from "react";
import axios from "axios";

const MainScreen = () => { 
    const [reportits, setReportits] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/reportits")
        .then((r) => {
            setReportits(r.data);
        });
    }, []);

}
export default MainScreen;