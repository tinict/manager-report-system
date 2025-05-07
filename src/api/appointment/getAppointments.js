import {fetchApi} from "@/utils/fetch-api.js";

export const getAppointments = async () => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: "/v1/appointments",
        });
        return response.data;

    }catch(e) {
        console.error("Error fetching examinees: ", e);
    }
}