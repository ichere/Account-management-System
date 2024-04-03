import { Helmet } from "react-helmet-async";

type MetaTagsProps = {
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
};

const MetaTags = ({ title, description, imageUrl, websiteUrl }: MetaTagsProps): JSX.Element => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:type" content={'website'} />
    </Helmet>
  );
};

export default MetaTags;
