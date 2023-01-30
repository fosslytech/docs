interface Args {
  url?: string;
  text?: string;
  filename: string;
}

const useDownload = () => {
  const jsFileDownload = ({ text, url, filename }: Args) => {
    const element = document.createElement('a');

    // If download local
    if (text) element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));

    // If download from API
    if (url) element.setAttribute('href', url);

    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  return { jsFileDownload };
};

export default useDownload;
