import * as React from 'react';
import { TechStacklWrapper } from './styles/techStack.styled';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
// import TreeItem from '../../src/assets/images/landing-page/techStack';

export default function FileSystemNavigator() {
  return (
    <TechStacklWrapper>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflow: 'hidden' }}
      >
        <TreeItem nodeId="1" label="Front End">
          <div className='node-wrapper'>
            <img className='icons' src='../../src/assets/images/landing-page/techStack/js.png' />
            <span className='node'>JavaScript</span>
          </div>
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="8" label="index.js" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </TechStacklWrapper>
  );
}