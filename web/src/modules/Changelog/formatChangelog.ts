import dayjs from 'dayjs';

export const formatChangelog = (data: string): { title: string; content: string }[] => {
  let array = [];
  let objCounter = 0;

  const splicedData = data.split('\n').slice(7);

  splicedData.map((str, i) => {
    const found = array[objCounter];
    if (!found) array.push({ title: '', content: '' });

    if (str.substring(0, 3) === '## ') {
      array[objCounter].title =
        'v' + str.substring(4, 9) + ' - ' + dayjs(str.substring(13)).format('DD.MM.YYYY');
    } else {
      array[objCounter].content = array[objCounter].content + '\n' + str;
    }

    if (splicedData[i + 1] && splicedData[i + 1].substring(0, 3) === '## ') {
      objCounter++;
    }
  });

  return array;
};
