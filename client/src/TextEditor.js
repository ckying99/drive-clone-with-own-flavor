import { useCallback, useRef } from 'react';
import Quill from 'quill'
import React from 'react';
import "quill/dist/quill.snow.css"
import "./styles.css"

export default function TextEditor(){
    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return 

        wrapper.innerHTML = ""
        const editor = document.createElement("div");
        wrapper.append(editor);
        var toolbarOptions = [
            ['undo' , 'redo' ],
            [{ 'header': [false, 1, 2, 3] }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline',],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            [{ 'script': 'super' }, 'strike'],
            [{ 'color': [] }, { 'background': [] }], 
            ['link', 'image'],
            
          ];
        
        var formats = [
            'header',
            'align',
            'bold', 'italic', 'underline', 
            'list', 'bullet',
            'indent', 'indent',
            'script', 'strike',
            'color', 'background',
            'link', 'image',
        ];  
        new Quill(editor, { 
            theme: "snow",
            modules: {
                toolbar: toolbarOptions,
            },
            format: formats

        })
        var icons = Quill.import("ui/icons");
          icons["undo"] = `<svg viewbox="0 0 18 18">
          <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
          <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
        </svg>`;
          icons["redo"] = `<svg viewbox="0 0 18 18">
          <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
          <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
        </svg>`;
        return () => {
            wrapperRef.innerHTML = ""
        }
    },[])
    return <div className="container" ref = {wrapperRef}></div>
}