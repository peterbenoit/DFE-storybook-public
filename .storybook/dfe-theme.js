import { create } from '@storybook/theming';
import Logo from '../stories/assets/DFE-CL-logo.png';

export default create({
    base: 'light',
    brandTitle: 'DFE Component Library',
    brandUrl: 'https://cdc.gov',
    brandImage: Logo,
    brandTarget: '_self',
});