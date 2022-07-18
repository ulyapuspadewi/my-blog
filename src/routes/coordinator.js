export const goToHome = (navigate) => {
  navigate("/");
};
export const goToDetailsPage = (navigate, key) => {
  navigate(`/detail/${key}`);
};
export const goToListPost = (navigate) => {
  navigate("/ListPosts");
};
export const goBack = (navigate) => {
  navigate(-1);
};