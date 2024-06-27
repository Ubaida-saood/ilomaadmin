/* eslint-disable arrow-body-style */
import { postMethod } from "../../apiConfig";

export const getTeamsApi = (data) => {
    return postMethod('/superadmin/get-teams', data);
};

export const getTeamApi = (data) => {
    return postMethod('/superadmin/get-Team', data);
};

export const createTeamApi = (data) => {
    return postMethod('/superadmin/create-Team', data);
};

export const updateTeamApi = (data) => {
    return postMethod('/superadmin/update-team', data); 
};

export const deleteTeamApi = (data) => {
    return postMethod('/superadmin/delete-team', data);
};


/* eslint-disable arrow-body-style */
