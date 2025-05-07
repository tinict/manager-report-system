import {fetchApi} from "@/utils/fetch-api.js";

export const getDistrictByProvinceId = async (province_id) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `/v1/provinces/${province_id}/districts`,
        });
        console.log("api districts")
        console.log(response)
        return response.data;
    }catch(e) {
        console.error("Error fetching districts: ", e);
    }
}