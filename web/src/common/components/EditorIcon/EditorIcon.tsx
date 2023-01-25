import { FluentIconsProps } from '@fluentui/react-icons';
import { IFC } from '@ts/global.types';
import React from 'react';

interface Props extends IFC {
  fontSize?: number;
  icon?: React.FC<FluentIconsProps>;
}

const EditorIcon: React.FC<Props> = ({ icon, fontSize }) => {
  //   const Icon = icon({fontSize});
  return icon({ fontSize });
};

export default EditorIcon;
