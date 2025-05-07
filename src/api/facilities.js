import {fetchApi} from "@/utils/fetch-api.js";

export const getFacilities = async () => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: "/v1/facilities",
        });
        return response.data;
    }catch(e) {
        console.error("Error fetching facilities: ", e);
    }
}