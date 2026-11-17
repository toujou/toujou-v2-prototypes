import { Meta } from '@storybook/web-components-vite';

export default {
    title: 'COMPONENTS/Text Elements',
} satisfies Meta;

const Template = () => {
    return `
        <main>
            <h1>H1 - default</h1>
            <h1><span class="font--primary">H1 - "Text color: primary"</span></h1>
            <h1><span class="font--secondary">H1 - "Text color: secondary"</span></h1>
            <h1><span class="font--font">H1 - "Text color: font"</span></h1>
            
            <h2>H2 - default</h2>
            <h2><span class="font--primary">H2 - "Text color: primary"</span></h2>
            <h2><span class="font--secondary">H2 - "Text color: secondary"</span></h2>
            <h2><span class="font--font">H2 - "Text color: font"</span></h2>
            
            <h3>H3 - default</h3>
            <h3><span class="font--primary">H3 - "Text color: primary"</span></h3>
            <h3><span class="font--secondary">H3 - "Text color: secondary"</span></h3>
            <h3><span class="font--font">H3 - "Text color: font"</span></h3>
            
            <h4>H4 - default</h4>
            <h4><span class="font--primary">H4 - "Text color: primary"</span></h4>
            <h4><span class="font--secondary">H4 - "Text color: secondary"</span></h4>
            <h4><span class="font--font">H4 - "Text color: font"</span></h4>
            
            <h5>H5 - default</h5>
            <h5><span class="font--primary">H5 - "Text color: primary"</span></h5>
            <h5><span class="font--secondary">H5 - "Text color: secondary"</span></h5>
            <h5><span class="font--font">H5 - "Text color: font"</span></h5>
            
            <p>Default text - Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</p>
            <p><span class="font--primary">“Text color: primary” - Lorem ipsum dolor sit amet, </span><a href="#"><span class="font--primary">consectetur adipiscing</span></a><span class="font--primary"> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</span></p>
            <p><span class="font--secondary">“Text color: secondary” - Lorem ipsum dolor sit amet, </span><a href="#"><span class="font--secondary">consectetur adipiscing</span></a><span class="font--secondary"> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</span></p>
            <p><span class="font--font">“Text color: font” - Lorem ipsum dolor sit amet, </span><a href="#"><span class="font--font">consectetur adipiscing</span></a><span class="font--font"> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</span></p>           
        </main>
    `;
};

export const TextElementsRTEStyles = Template.bind({}) as any;
TextElementsRTEStyles.storyName = 'Text Elements - RTE Styles';

TextElementsRTEStyles.args = {
    tableAlignment: 'none',
}
