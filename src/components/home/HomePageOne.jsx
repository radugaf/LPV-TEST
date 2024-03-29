// react
import React, { useMemo } from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// application
import shopApi from '../../api/shop';
import { useDeferredData, useProductColumns, useProductTabs } from '../../services/hooks';

// blocks
import BlockBanner from '../blocks/BlockBanner';
import BlockBrands from '../blocks/BlockBrands';
import BlockCategories from '../blocks/BlockCategories';
import BlockFeatures from '../blocks/BlockFeatures';
import BlockPosts from '../blocks/BlockPosts';
import BlockProductColumns from '../blocks/BlockProductColumns';
import BlockProducts from '../blocks/BlockProducts';
import BlockProductsCarousel from '../blocks/BlockProductsCarousel';
import BlockSlideShow from '../blocks/BlockSlideShow';

// data stubs
import categories from '../../data/shopBlockCategories';
import posts from '../../data/blogPosts';
import theme from '../../data/theme';

function HomePageOne() {
    /**
     * Featured products.
     */
    const featuredProducts = useProductTabs(
        useMemo(() => [
            { id: 1, name: 'Toate', categorySlug: undefined },
            { id: 2, name: 'Aer conditionat', categorySlug: 'power-tools' },
            { id: 3, name: 'Centrale', categorySlug: 'hand-tools' },
            { id: 4, name: 'Pompe', categorySlug: 'plumbing' },
        ], []),
        (tab) => shopApi.getPopularProducts({ limit: 8, category: tab.categorySlug }),
    );

    /**
     * Bestsellers.
     */
    const bestsellers = useDeferredData(() => (
        shopApi.getPopularProducts({ limit: 7 })
    ), []);

    /**
     * Latest products.
     */
    const latestProducts = useProductTabs(
        useMemo(() => [
            { id: 1, name: 'Toate', categorySlug: undefined },
            { id: 2, name: 'Centrale', categorySlug: 'power-tools' },
            { id: 3, name: 'Aer Conditionat', categorySlug: 'hand-tools' },
            { id: 4, name: 'Pompe', categorySlug: 'plumbing' },
        ], []),
        (tab) => shopApi.getLatestProducts({ limit: 8, category: tab.categorySlug }),
    );

    /**
     * Product columns.
     */
    const columns = useProductColumns(
        useMemo(() => [
            {
                title: 'Cele mai vandute',
                source: () => shopApi.getTopRatedProducts({ limit: 3 }),
            },
            {
                title: 'Oferte Speciale',
                source: () => shopApi.getDiscountedProducts({ limit: 3 }),
            },
            {
                title: 'Bestsellers',
                source: () => shopApi.getPopularProducts({ limit: 3 }),
            },
        ], []),
    );

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Home Page One — ${theme.name}`}</title>
            </Helmet>

            {useMemo(() => <BlockSlideShow withDepartments />, [])}

            {useMemo(() => <BlockFeatures />, [])}

            {useMemo(() => (
                <BlockProductsCarousel
                    title="Produse Noi"
                    layout="grid-4"
                    products={featuredProducts.data}
                    loading={featuredProducts.isLoading}
                    groups={featuredProducts.tabs}
                    onGroupClick={featuredProducts.handleTabChange}
                />
            ), [featuredProducts])}

            {useMemo(() => <BlockBanner />, [])}

            {useMemo(() => (
                <BlockProducts
                    title="Bestsellers"
                    layout="large-first"
                    featuredProduct={bestsellers.data[0]}
                    products={bestsellers.data.slice(1, 7)}
                />
            ), [bestsellers.data])}

            {useMemo(() => (
                <BlockCategories
                    title="Categorii populare"
                    layout="classic"
                    categories={categories}
                />
            ), [])}

            {useMemo(() => (
                <BlockProductsCarousel
                    title="Produse noi"
                    layout="horizontal"
                    rows={2}
                    products={latestProducts.data}
                    loading={latestProducts.isLoading}
                    groups={latestProducts.tabs}
                    onGroupClick={latestProducts.handleTabChange}
                />
            ), [latestProducts])}

            {useMemo(() => <BlockPosts title="Ultimele Noutati" layout="list-sm" posts={posts} />, [])}

            {useMemo(() => <BlockBrands />, [])}

            {useMemo(() => <BlockProductColumns columns={columns} />, [columns])}
        </React.Fragment>
    );
}

export default HomePageOne;
