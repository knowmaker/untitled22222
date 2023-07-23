import React from 'react';
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';


const content = '<p>RichTextEditor<sup>243</sup></p>';

function Demo() {
    const editor = useEditor({
        extensions: [StarterKit, Superscript, SubScript],
        content,
        onUpdate({ editor }) {
            console.log(editor.getHTML());
        },
    });

    return (
        <RichTextEditor editor={editor}>
            <div>
                <select
                    name="letters"
                    onChange={(e) => editor?.commands.insertContentAt(editor.state.doc.content.size-1, e.target.value)}
                    value="" // Set the default option to an empty value
                >
                    <option value="" disabled>
                        Select a letter
                    </option>
                    {Array.from({ length: 26 }, (_, index) => {
                        const letter = String.fromCharCode(97 + index);
                        return (
                            <option key={letter} value={letter}>
                                {letter}
                            </option>
                        );
                    })}
                </select>
            </div>
            {/*<RichTextEditor.Toolbar sticky stickyOffset={60}>*/}
            {editor && (
                <FloatingMenu editor={editor} shouldShow={({ editor, view, state, oldState }) => {
                    return editor.isActive('paragraph')
                }}>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Subscript />
                        <RichTextEditor.Superscript />
                    </RichTextEditor.ControlsGroup>
                </FloatingMenu>
            )}
            {/*</RichTextEditor.Toolbar>*/}
            <RichTextEditor.Content />
        </RichTextEditor>
    );
}

export default Demo;