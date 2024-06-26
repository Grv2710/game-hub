import NoImage from "../assets/no_image.jpg";

const imageUrl = (url: string) => {
  if (!url) return NoImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default imageUrl;
