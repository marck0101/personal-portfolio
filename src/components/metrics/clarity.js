import { useEffect } from 'react';

const MicrosoftClarity = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.clarity.ms/tag/lyju0gbkv7";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default MicrosoftClarity;
