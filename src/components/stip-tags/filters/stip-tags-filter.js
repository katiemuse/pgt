'use strict';

export default function stripTags() {
  return function (text) {
    return String(text).replace(/<[^>]+>/gm, '');
  };
}
