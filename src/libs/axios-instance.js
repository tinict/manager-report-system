"use strict";

import axios from "axios";

const token = JSON.parse((localStorage.getItem("app_state")))?.auth?.token ?? "";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
    }
});
