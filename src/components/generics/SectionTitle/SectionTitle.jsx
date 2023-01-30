import React from 'react';
import * as P from './sectionTitle.parts';

const SectionTitle = ({ color, children }) => {
    return <P.Title color={color}>{children}</P.Title>;
};

export default SectionTitle;
