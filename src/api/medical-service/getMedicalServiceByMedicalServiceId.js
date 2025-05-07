import {fetchApi} from "@/utils/fetch-api.js";

export const getMedicalServiceByMedicalServiceId = async (medicalServiceId, facilityId) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `/v1/medical-services/${medicalServiceId}/facilities/${facilityId}`,
        });
        return response.data;
    }catch(e) {
        console.error("Error fetching medical-services: ", e);
    }
}