interface Args {
  inputPath: string;
  outputDir: string;
  extIn: 'html' | 'odt' | 'ods';
  extOut: 'html' | 'odt' | 'ods';
}

const getCommand = (args: Args): [string, ...string[]] => {
  const { extOut, inputPath, outputDir } = args;

  switch (extOut) {
    case 'html':
      return ['soffice', '--headless', '--convert-to', 'html', inputPath, '--outdir', outputDir];

    case 'odt':
      return ['soffice', '--headless', '--convert-to', 'odt', inputPath, '--outdir', outputDir];

    case 'ods':
      return ['soffice', '--headless', '--convert-to', 'ods:calc8', inputPath, '--outdir', outputDir];

    default:
      return ['echo', 'hello'];
  }
};

export const sofficeConvert = (args: Args) => {
  const command = getCommand(args);

  Bun.spawnSync(command);
};
