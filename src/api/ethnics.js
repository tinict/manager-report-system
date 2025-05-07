import {fetchApi} from "@/utils/fetch-api.js";

export const getEthnicsByNationId = async (nation_id) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `/v1/nations/${nation_id}/ethnics`,
        });
        console.log("api ethnics")
        console.log(response)
        return response.data;
    }catch(e) {
        console.error("Error fetching ethnics: ", e);
    }
}