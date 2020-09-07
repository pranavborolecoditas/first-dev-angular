import { storiesOf } from '@storybook/angular';
import { HomeComponent } from '../app/home/home.component';

storiesOf('Home component', module)
    .add('with name', () => ({
        component: HomeComponent,
        props: {
            product: {
                name: 'product 1'
            }
        },
    }))
    .add('empty', () => ({
        component: HomeComponent,
        props: {
            product: {
            }
        },
    }))
    .add('with product material', () => ({
        component: HomeComponent,
        props: {
            product: {
                name: 'product 1',
                productMaterial: 'product material',
            }
        },
    }))
    .add('full data', () => ({
        component: HomeComponent,
        props: {
            product: {
                name: 'product 1',
                productMaterial: 'product material',
            }
        },
    }));