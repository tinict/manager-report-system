import {fetchApi} from "@/utils/fetch-api.js";

export const getExaminees = async () => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: "/v1/examinees",
        });
        return response.data;
    }catch(e) {
        console.error("Error fetching examinees: ", e);
    }
}