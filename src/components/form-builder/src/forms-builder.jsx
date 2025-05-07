import React, { useState, useEffect } from "react";
import grapesjs from 'grapesjs';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
import grapesjsBlocksBasic from 'grapesjs-blocks-basic';
import 'grapesjs/dist/css/grapes.min.css';

const FormsBuilder = () => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        const initializeEditor = () => {
            const editorInstance = grapesjs.init({
                container: '#gjs',
                plugins: [
                    grapesjsBlocksBasic,
                    grapesjsPresetWebpage,
                ],
            });

            editorInstance.BlockManager.add('Nhập nội dung', {
                label: 'Input',
                category: 'Forms',
                attributes: {
                    class: 'fa fa-square',
                    title: 'Input'
                },
                content: '<input type="text" placeholder="Input">',
            });

            editorInstance.on('component:update', () => {
                setHtml(editorInstance.getHtml());
                setCss(editorInstance.getCss());
            });

            setEditor(editorInstance);
        };

        initializeEditor();

        return () => {
            if (editor) {
                editor.destroy();
            }
        };
    }, []);

    // const generateContentForm = async () => {
    //     try {
    //         const styleStart = content.indexOf('<style>');
    //         const styleEnd = content.indexOf('</style>');
    //         const htmlContent = styleStart !== -1 && styleEnd !== -1 ? content.substring(styleEnd + 8) : content;
    //         const cssContent = styleStart !== -1 && styleEnd !== -1 ? content.substring(styleStart + 7, styleEnd) : '';

    //         editor.setComponents(htmlContent);
    //         editor.setStyle(cssContent);
    //     } catch (error) {
    //         console.error('Failed to read file:', error);
    //     }
    // };

    // useEffect(() => {
    //     if (editor && fname) {
    //         generateContentForm();
    //     }
    // }, [editor, fname]);

    return (
        <div id="gjs"></div>
    );
};



export default FormsBuilder;