import {fetchApi} from "@/utils/fetch-api.js";

export const getProvincesByNationId = async (nation_id) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `/v1/nations/${nation_id}/provinces`,
        });
        console.log("api provinces")
        console.log(response)
        return response.data;
    }catch(e) {
        console.error("Error fetching provinces: ", e);
    }
}