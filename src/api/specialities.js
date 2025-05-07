import {fetchApi} from "@/utils/fetch-api.js";

export const getSpecialities = async () => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: "/v1/specialities",
        });
        return response.data;
    }catch(e) {
        console.error("Error fetching specialities: ", e);
    }
}