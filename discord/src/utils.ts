import { readFile, readFileSync } from 'fs';

export const formatTime = (time: number) => {
  const pad = (s: number) => {
    return (s < 10 ? '0' : '') + s;
  };

  const hours = Math.floor(time / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);

  return pad(hours) + ' hours, ' + pad(minutes) + ' mins ';
};

export const getLinuxDistro = () => {
  const data = readFileSync('/etc/os-release', 'utf8');

  if (!data) return '';

  const lines = data.split('\n');
  const releaseDetails = {} as any;

  lines.forEach((line, index) => {
    // Split the line into an array of words delimited by '='
    const words = line.split('=');
    releaseDetails[words[0]?.trim()?.toLowerCase()] = words[1]?.trim();
  });

  const distro = releaseDetails?.name as string;

  return distro.replace(/"/g, '');
};
