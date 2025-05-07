import {fetchApi} from "@/utils/fetch-api.js";

export const getWardsByDistrictId = async (ward_id) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `/v1/districts/${ward_id}/wards`,
        });
        console.log("api wards")
        console.log(response)
        return response.data;
    }catch(e) {
        console.error("Error fetching wards: ", e);
    }
}