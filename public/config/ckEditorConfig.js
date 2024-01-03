import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import CloudinaryUploadAdapter from '@ckeditor/ckeditor5-cloudinary/src/cloudinaryuploadadapter';

import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockToolbarPlugin from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import BoldUIPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold/boldui';
import ItalicUIPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic/italicui';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOfficePlugin from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';

ClassicEditorBase.builtinPlugins = [
    EssentialsPlugin,
    UploadAdapterPlugin,
    AutoformatPlugin,
    BoldPlugin,
    ItalicPlugin,
    BlockToolbarPlugin,
    BoldUIPlugin,
    ItalicUIPlugin,
    ParagraphPlugin,
    PasteFromOfficePlugin,
    HeadingPlugin
];

export default ClassicEditorBase;