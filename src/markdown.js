import MarkdownIt from 'markdown-it'
import MarkdownItFrontMatter from 'markdown-it-front-matter'
import MarkdownItContainer from 'markdown-it-container'
import MarkdownItExtends from '~/markdown-it-extends'

import * as matter from 'gray-matter'

export default function (store) {
  const md = MarkdownIt();

  md.use(MarkdownItFrontMatter, (fm) => {
    const parsed = matter(`---\n${fm}\n---`).data;
    store.commit('SET_FRONT_MATTER', parsed)
  });

  md.use(MarkdownItExtends, store);

  // md.use(MarkdownItContainer, 'demo', {
  //   render(tokens, idx) {
  //   }
  // });

  return md;
};
