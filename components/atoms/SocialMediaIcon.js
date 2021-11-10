import Image from 'next/image';

const SocialMediaIcon = ({ src }) => {
  return <Image src={src} alt={src} width='30' height='30' />;
};

export default SocialMediaIcon;
