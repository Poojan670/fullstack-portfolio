import axiosInstance from "./axios";

export const getPageInfo = async () => {
    const res = await axiosInstance.get(`api/v1/portfolio-app/page-info`)
    return res.data
}

export const getSocials = async () => {
    const res = await axiosInstance.get(`api/v1/portfolio-app/social`)
    return res.data
}

export const getExperiences = async () => {
    const res = await axiosInstance.get(`api/v1/portfolio-app/experience`)
    return res.data
}

export const getSkills = async () => {
    const res = await axiosInstance.get(`api/v1/portfolio-app/skills`)
    return res.data
}

export const getProjects = async () => {
    const res = await axiosInstance.get(`api/v1/portfolio-app/projects`)
    return res.data
}