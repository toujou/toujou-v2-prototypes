function parseSrc(src) {
  const link = document.createElement('a');
  link.href = src;
  return {
    // eslint-disable-next-line max-len
    protocol: link.protocol, href: link.href, path: link.pathname, search: link.search, hash: link.hash,
  };
}

function isSrcOnpageContent(src) {
  const uri = parseSrc(src);
  const uriWithoutHash = uri.href.substr(0, uri.href.length - uri.hash.length);
  const currentUri = window.location.href.replace(/#.*$/, '');
  return uri.hash && uriWithoutHash === currentUri;
}

function generateId(prefix, hashArguments) {
  const string = JSON.stringify(hashArguments);
  let hash = 0;
  if (string.length === 0) {
    return hash;
  }
  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = ((hash << 5) - hash) + char;
    // eslint-disable-next-line no-bitwise
    hash &= hash; // Convert to 32bit integer
  }
  return `${prefix}-${hash}`;
}

function createPostForm(action, body, target) {
  const form = document.createElement('form');
  const input = document.createElement('input');

  form.action = action;
  form.method = 'POST';
  form.target = target;

  body.forEach(([name, value]) => {
    input.name = name;
    input.value = value.toString();
    form.appendChild(input.cloneNode());
  });

  form.style.visibility = 'hidden';
  return form;
}

// eslint-disable-next-line consistent-return
function getOpenerFromEvent(event) {
  const path = event.composedPath();
  for (let i = 0; i < path.indexOf(document.body); i++) {
    const target = path[i];
    if (target.hasAttribute && target.hasAttribute('target') && target !== document.body) {
      return target;
    }
  }
}

function getBodyFromOpener(opener, idHash) {
  if (opener.hasAttribute('data-modal-post')) {
    const modalPostArguments = opener.getAttribute('data-modal-post');
    // eslint-disable-next-line no-param-reassign
    idHash.method = 'POST';
    // eslint-disable-next-line no-param-reassign
    idHash.body = modalPostArguments;
    const body = [];
    (new URL(`http://localhost/?${modalPostArguments}`)).searchParams.forEach((value, name) => {
      body.push([name, value]);
    });
    return [body, idHash];
  }
  return [null, idHash];
}

function createModal(modalId, idHash, src, method, body) {
  const ToujouModal = document.createElement('toujou-modal');
  const iframe = document.createElement('iframe');
  const iframeId = generateId('iframe', idHash);

  ToujouModal.id = modalId;
  iframe.name = iframeId;

  document.body.appendChild(ToujouModal);

  if (isSrcOnpageContent(src)) {
    const content = document.querySelector(src);
    // eslint-disable-next-line max-len
    const contentNodes = content instanceof HTMLTemplateElement ? document.importNode(content.content, true).children : content.childNodes;
    if (content.title) {
      ToujouModal.title = content.title;
    }
    for (let i = 0; i < contentNodes.length; i++) {
      ToujouModal.appendChild(contentNodes[i]);
    }
  } else if (body && method === 'POST') {
    const form = createPostForm(src, body, iframeId);
    ToujouModal.appendChild(form);
    ToujouModal.appendChild(iframe);
    form.submit();
    form.remove();
  } else if (method === 'GET') {
    iframe.src = src;
    ToujouModal.appendChild(iframe);
  }
  return ToujouModal;
}

function openModal(idHash, src, method, body) {
  const modalId = generateId('toujou-modal', idHash);
  const modal = document.getElementById(modalId) || createModal(modalId, idHash, src, method, body);
  setTimeout(() => { modal.open(); });
}

// eslint-disable-next-line import/prefer-default-export
export const openModalOnToujouModalTargetClick = (event) => {
  if (event.metaKey || event.ctrlKey) {
    return;
  }

  const opener = getOpenerFromEvent(event);
  if (!(opener instanceof HTMLElement || opener instanceof SVGElement)
      || opener instanceof HTMLFormElement) {
    return;
  }

  if (opener.getAttribute('target') === 'toujou-modal') {
    const href = opener.getAttribute('href');
    // eslint-disable-next-line no-nested-ternary, prefer-template,no-useless-concat
    const src = (href.indexOf('?') !== -1 ? href.split('?')[0] + '?' + 'toujou-ajax-modal=1' + '&' + href.split('?')[1] : (href.indexOf('#') !== -1 ? href.split('#')[0] + '?' + 'toujou-ajax-modal=1' + '#' + href.split('#')[1] : href + '?' + 'toujou-ajax-modal=1'));
    const [body, idHash] = getBodyFromOpener(opener, { src });

    openModal(idHash, src, body ? 'POST' : 'GET', body);

    event.preventDefault();
    event.stopPropagation();
  }
};
