// import { API_END_POINT } from "../../apiUrl.js";

const process = window.process;
const API_END_POINT = process.env.API_END_POINT;
export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "x-username": "yjZero",
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return await res.json();
    }
    throw new Error("API 처리 실패");
  } catch (e) {
    alert(e.message);
  }
};
