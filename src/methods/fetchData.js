export const fetchData = async (url) => {
  const res = await fetch(url)
  return res.ok ? await res.json() : alert(res.status)
};
