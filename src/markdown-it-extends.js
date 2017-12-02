import axios from 'axios'
import grayMatter from 'gray-matter';

/*
  This code is probably very unoptimized, but it works for now...
  Todo: check if there is a better / easier way to do this
 */
function processExtend(state, matter) {
  state.md.isExtending = false;
  state.md.extendMatter = null;

  if (matter.rename) {
    matter.rename.forEach(rename => renameHeading(state, rename))
  }

  if (matter.remove) {
    matter.remove.forEach(remove => removeHeading(state, remove))
  }
}

function renameHeading(state, rename) {
  const from = Object.keys(rename)[0];
  const to = Object.values(rename)[0];

  const [from_markup] = from.split(' ');
  const from_title = from.substr(from_markup.length + 1);

  const [to_markup] = to.split(' ');
  const to_title = to.substr(to_markup.length + 1);

  let curr, next;

  for (let i = 0; i < state.tokens.length - 1; i++) {
    curr = state.tokens[i];
    next = state.tokens[i + 1];

    if (curr.type !== 'heading_open' || next.type !== 'inline') {
      continue;
    }

    if (curr.markup === from_markup && next.content === from_title) {
      next.children[0].content = to_title;
    }
  }
}

function removeHeading(state, heading) {
  let markup = heading.split(' ')[0];
  let title = heading.substr(markup.length + 1);
  let curr, next;

  let foundIndex = -1;

  for (let i = 0; i < state.tokens.length; i++) {
    curr = state.tokens[i];
    next = state.tokens[i + 1];

    if (curr.type !== 'heading_open' || next.type !== 'inline') {
      continue;
    }

    if (curr.markup === markup && next.content === title) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex > -1) {
    let endIndex = state.tokens.length;
    for (let j = foundIndex + 2; j < state.tokens.length; j++) {
      curr = state.tokens[j];
      next = state.tokens[j + 1];

      if (curr.type !== 'heading_open' || next.type !== 'inline') {
        continue;
      }

      endIndex = j;
      break;
    }

    state.tokens.splice(foundIndex, endIndex);
  }
}

export default function (md, store) {
  md.core.ruler.push('extends', (state) => {
    if (md.isExtending) {
      return processExtend(state, md.extendMatter);
    }

    const matter = store.state.current.matter;

    if (matter.extends) {
      state.tokens = [];
      axios.get(matter.extends.toString()).then(res => {
        md.isExtending = true;
        md.extendMatter = matter;

        const addition = '\n' + grayMatter(store.state.current.raw_content).content;
        store.commit('SET_CURRENT_RAW_CONTENT', res.data);
        store.commit('SET_CURRENT_CONTENT', md.render(res.data) + md.render(addition));
      });
    }
  })
}
