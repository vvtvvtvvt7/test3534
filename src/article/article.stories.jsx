import React from "react";
import Article from "./article";

export default {
    title: 'Артикул (Article)',
}
const Template = (args) => <Article {...args} />;

export const defaultArticle  = Template.bind({});

defaultArticle.args = {
    children: '3432343',
}
