import {fetchApi} from "@/utils/fetch-api.js";

export const getNations = async () => {
        try {
            let response = await fetchApi({
                method: "GET",
                url: "/v1/nations",
            });
            console.log("api nations")
            console.log(response)
            return response.data;
        }catch(e) {
            console.error("Error fetching nations: ", e);
        }
}