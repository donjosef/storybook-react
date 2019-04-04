import React from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem/AccordionItem';
import SkeletonItem from './SkeletonItem/SkeletonItem';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const title1 = "Section 1 Title";
const title2 = "Section 2 Title";
const title3 = "Section 3 Title";


const actions = {
    onContentClick: action("Content clicked!"),
    onHeadingClick: action("Heading clicked!")
};

storiesOf('Accordion', module)
    .addDecorator(withKnobs)
    .addDecorator(story => <div style={{ padding: '6rem' }}>{story()}</div>)
    .add('default', () => (
        <Accordion>
            <AccordionItem
                title={title1}
                open={boolean('Open the section (open)', false)}
                id={1}
                {...actions}>
                <p>Lorem ipsum bla bla bla. Questa è una prova speriam!!! Lorem ipsum bla bla bla. QUesta è una prova speriam!!! Lorem ipsum bla bla bla. Questa è una prova speriam!!!LOrem ipsum bla bla bla. QUesta è una prova speriam!!!</p>
            </AccordionItem>
            <AccordionItem title={title2} id={2} {...actions}>
                <p>Section 2 prova test speriamo trallallà Section 2 prova test speriamo trallallà Section 2 prova test speriamo trallallà Section 2 prova test speriamo trallallà Section 2 prova test speriamo trallallà Section 2 prova test speriamo trallallà</p>
            </AccordionItem>
            <AccordionItem title={title3} id={3} {...actions}>
                <p>Section 3 prova test speriamo trallallà Section 2 prova test speriamo trallallà Section 2 prova test speriamo trallallà Section 2 prova test speriamo trallallà Section 2 prova test speriamo trallallà Section 2 prova test speriamo trallallà</p>
            </AccordionItem>
        </Accordion>
    ))
    .add('skeleton', () => (
        <div style={{width: 500, margin: 'auto'}}>
            <Accordion>
                <SkeletonItem open={boolean('Show first item opened (open)', true)} />
                <SkeletonItem />
                <SkeletonItem />
            </Accordion>
        </div>
    ))