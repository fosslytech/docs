import useDownload from '@hooks/use-download';
import { ISupportedInputExtensions, ISupportedOutputExtensions } from '@ts/global.types';
import { useMutation, useQueryClient } from 'react-query';
import useFetch from '../use-fetch';

export interface IConvertResponse {
  roomName: string;
  output: string;
}

interface UploadDTO {
  file: File;
  format: ISupportedInputExtensions;
}

interface DownloadDTO {
  text: string;
  to: ISupportedOutputExtensions;
}

// ---------------------------------------------------------------
// Convert API - new document
// Just returns a room uuid
// ---------------------------------------------------------------

export const useConvertNewMutation = () => {
  const { fetchData } = useFetch();

  return useMutation(() => {
    return fetchData('/api/uuid', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
  });
};

// ---------------------------------------------------------------
// Convert API - upload document
// Converts .odt to raw html used in editor
// ---------------------------------------------------------------

export const useConvertUploadMutation = () => {
  const { fetchData } = useFetch();

  return useMutation(({ file, format }: UploadDTO) => {
    const formData = new FormData();
    formData.append('file', file);

    return fetchData(process.env.NEXT_PUBLIC_API_URL + `/convert?to=${format}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });
  });
};

// ---------------------------------------------------------------
// Convert API - download document
// Converts .odt to raw html used in editor
// ---------------------------------------------------------------

const tekst = `
<!DOCTYPE html>

<html>
<head>
	
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	<meta name="generator" content="LibreOffice 7.5.0.3 (Linux)"/>
	<meta name="created" content="2023-03-05T19:56:19.422143956"/>
	<meta name="changed" content="2023-03-05T19:57:18.037919771"/>
	
	<style type="text/css">
		body,div,table,thead,tbody,tfoot,tr,th,td,p { font-family:"Liberation Sans"; font-size:x-small }
		a.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em;  } 
		a.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em;  } 
		comment { display:none;  } 
	</style>
	
</head>

<body>
<table cellspacing="0" border="0">
	<colgroup span="5" width="85"></colgroup>
	<tr>
		<td height="17" align="right" sdval="1" sdnum="1033;">1</td>
		<td align="left"><br></td>
		<td align="left"><br></td>
		<td align="left"><br></td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="17" align="left"><br></td>
		<td align="right" sdval="2" sdnum="1033;">2</td>
		<td align="left"><br></td>
		<td align="left"><br></td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="17" align="left"><br></td>
		<td align="left"><br></td>
		<td align="right" sdval="3" sdnum="1033;">3</td>
		<td align="left"><br></td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="17" align="left"><br></td>
		<td align="left"><br></td>
		<td align="left"><br></td>
		<td align="right" sdval="4" sdnum="1033;">4</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="17" align="left"><br></td>
		<td align="left"><br></td>
		<td align="left"><br></td>
		<td align="left"><br></td>
		<td align="right" sdval="5" sdnum="1033;">5</td>
	</tr>
</table>
<!-- ************************************************************************** -->
</body>

</html>`;

export const useConvertDownloadMutation = () => {
  const { fetchData } = useFetch();
  const { jsFileDownload } = useDownload();

  return useMutation(
    ({ text, to }: DownloadDTO) => {
      return fetchData(process.env.NEXT_PUBLIC_API_URL + `/prepare-download?to=${to}`, {
        method: 'POST',
        body: JSON.stringify({ text: tekst }),
      });
    },

    {
      onSettled: (data, _error, { to }) => {
        jsFileDownload({
          filename: `output.${to}`,
          url: process.env.NEXT_PUBLIC_API_URL + `/download?to=${to}&uuid=${data}`,
        });
      },
    }
  );
};
