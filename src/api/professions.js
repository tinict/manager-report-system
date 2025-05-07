import {fetchApi} from "@/utils/fetch-api.js";

export const getProfessions = async () => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: "/v1/professions",
        });
        console.log("api professions")
        console.log(response)
        return response.data;
    }catch(e) {
        console.error("Error fetching professions: " + e);
    }
}