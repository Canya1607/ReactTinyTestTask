import clientAPI from ".";

export const getRepos = (q = '', per_page = 1, page = 1) => {
  return clientAPI.get(`/search/repositories?q=${q}&per_page=${per_page}&page=${page}`);
};
