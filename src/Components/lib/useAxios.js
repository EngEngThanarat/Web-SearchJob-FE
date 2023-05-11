import axios from "axios";

const instant = axios.create({
    baseURL:'http://localhost:4000'
})

export default instant;