import axios from "axios";

const instant = axios.create({
    baseURL:'https://uptight-hen-stockings.cyclic.app'
})

export default instant;