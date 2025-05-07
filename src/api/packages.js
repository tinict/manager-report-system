import {fetchApi} from "@/utils/fetch-api.js";

export const getPackages = async (facilityId, examineId) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `/v1/medical-services/facilities/${facilityId}/health-packages?examineId=${examineId}`,
        });
        return response.data;
    }catch(e) {
        console.error("Error fetching health-packages: ", e);
    }
}