
import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

const { act } = renderer

describe('ProductCard', () => {

    test('debe de mostrar el componente correctamente ', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1}>

                {
                    () => (
                        <h1>product card</h1>
                    )
                }

            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('debe incrementar el contador', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1}>

                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}></button>
                        </>
                    )
                }

            </ProductCard>
        )

        let tree = wrapper.toJSON();
        console.log(tree);

        expect(tree).toMatchSnapshot();

        (tree as any).children[2].props.onClick();

        act(() => {
            expect((tree as any).children[1].children[0]).toBe('1');
        })

        tree = wrapper.toJSON();



    })
})
