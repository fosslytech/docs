export const handleRedirect = (path: string) => ({
  redirect: {
    destination: path,
    premanent: false,
  },
});
