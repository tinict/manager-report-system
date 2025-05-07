import { fetchApi } from "@/utils/fetch-api.js";

export const getExaminationRecord = async () => {

    try {
        let response = await fetchApi({
            method: "GET",
            url: `/v1/examination-records`,
        });
        return response.data;
    } catch (e) {
        console.log("Error fetching examination-records: " + e);
    }
}