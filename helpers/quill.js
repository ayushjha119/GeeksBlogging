import React from 'react'
import ReactDOM from 'react-dom'

import hljs from 'highlight.js'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.snow.css'
import 'highlight.js/styles/Devibeans.css';

// hljs.configure({
//   languages: ['javascript', 'ruby', 'python', 'rust','c', 'c++'],
// })




export const QuillModules = {
    syntax: {
        highlight: (text) => hljs.highlightAuto(text).value
      },
    toolbar: [
        [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ],
  clipboard: {
    matchVisual: false
  }
};

export const QuillFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
];