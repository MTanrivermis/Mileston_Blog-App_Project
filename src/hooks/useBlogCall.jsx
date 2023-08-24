import {
  fetchFail,
  fetchStart,
  getBlogSuccess,
  getBlogDetail,
  getCategorySuccess,
  postNewBlogSuccess,
} from "../features/blogSlice";
import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./use.Axios";
import { useNavigate } from "react-router-dom";
//import { useState } from "react";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosWithToken } = useAxios();
  const navigate = useNavigate();

  //! GET BLOG DATA********************************

  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/api/${url}/`);
      console.log(data);
      dispatch(getBlogSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  //! GET CATEGORY DATA********************************
  const getCategoryData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/api/${url}/`);
      console.log(data);
      dispatch(getCategorySuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  //! DELETE BLOG DATA********************************
  const deleteBlogData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/api/${url}/${id}/`);
      toastSuccessNotify(`${url} succesfuly deleted`);
      getBlogData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be deleted`);
      console.log(error);
    }
  };

  //! POST BLOG DATA********************************
  const postBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/api/${url}/`, info);
      toastSuccessNotify(`${url} succesfuly posted`);
      getBlogData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`);
      console.log(error);
    }
  };

  //! GET BLOG DETAIL DATA********************************
  const getBlogDetailsData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/api/${url}/${id}/`);
      dispatch(getBlogDetail(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  //! POST BLOG LIKE DATA********************************
  const postBlogLikeData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/api/${url}/${id}/`);
      toastSuccessNotify(`${url} Like Alındı :)`);
      getBlogDetailsData("blogs", id);
      getBlogData("blogs");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} Like Hata Oldu!`);
      console.log(error);
    }
  };

  //! POST COMMENT DATA********************************
  const commentPost = async (url, detailsId, values) => {
    console.log(url, detailsId);
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/api/${url}/${detailsId}/`, values);
      toastSuccessNotify(`${url} Başarılı :)`);
      getBlogDetailsData("blogs", detailsId);
      //getBlogData("blogs");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} Comment Hatası Oldu!`);
      console.log(error);
    }
  };

  //! POST NEW BLOG DATA********************************
  const createNewBlog = async (url, values) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`/api/${url}/`, values);
      dispatch(postNewBlogSuccess(data));
      toastSuccessNotify(`${url} Başarılı :)`);
      navigate("/");
      getBlogData("blogs");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} New Blog does not create!`);
      console.log(error);
    }
  };

  const putBlogData = async (url, id, values) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/api/${url}/${id}/`, values);
      toastSuccessNotify(`${url} succesfuly updated`);
      getBlogData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be updated`);
      console.log(error);
    }
  };

  return {
    getBlogData,
    deleteBlogData,
    postBlogData,
    postBlogLikeData,
    getBlogDetailsData,
    commentPost,
    getCategoryData,
    createNewBlog,
    putBlogData,
  };
};
export default useBlogCall;
