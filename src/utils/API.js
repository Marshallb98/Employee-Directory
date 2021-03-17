import axios from "axios";

const QUERYURL = "https://randomuser.me/api/?results=25"

export default {
    getEmployees: function() {
        return axios.get(QUERYURL);
    }
};