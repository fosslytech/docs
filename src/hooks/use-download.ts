interface Args {
  path: string;
  filename: string;
}

const useDownload = (args: Args) => {
  const { filename, path } = args;

  const download = async () => {
    // Create a new link
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;

    // Append to the DOM
    document.body.appendChild(anchor);

    // Trigger `click` event
    anchor.click();

    // Remove element from DOM
    document.body.removeChild(anchor);
  };

  return { download };
};

export default useDownload;
