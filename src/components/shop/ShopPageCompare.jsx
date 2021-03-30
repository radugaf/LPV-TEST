// react
import React, {useState, useEffect} from 'react';

// third-party
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// application
import AsyncAction from '../shared/AsyncAction';
import Currency from '../shared/Currency';
import PageHeader from '../shared/PageHeader';
import Rating from '../shared/Rating';
import { cartAddItem } from '../../store/cart';
import { compareRemoveItem } from '../../store/compare';
import { getCategoryParents, url } from '../../services/utils';

// data stubs
import theme from '../../data/theme';

function ShopPageCompare(props) {

    // MULTISTEP FORM START 
    const [formStep, setFormStep] = React.useState(0)

        // STEP 0 BUTTONS

    const completeFormStep1 = () => {
        setFormStep(cur => +1)
    }

    const completeFormStep2 = () => {
        setFormStep(cur => +2)
    }

        // STEP 2 GET INFO AND CALCULATE 

    const [suputila, setSuputila] = React.useState(null)

    const getSupUtila = (e) => {
        setSuputila(+e.target.value)
    }

    const [inaltime, setInaltime] = React.useState(null)

    const getInaltime = (e) => {
        setInaltime(+e.target.value)
    }

    const [bai, setBai] = React.useState(null)

    const getBai = (e) => {
        setBai(+e.target.value)
    }

    const [bucatarii, setBucatarii] = React.useState(null)

    const getBucatarii = (e) => {
        setBucatarii(+e.target.value)
    }

    const [persoane, setPersoane] = React.useState(null)

    const getPersoane = (e) => {
        setPersoane(+e.target.value)
    }
    
    const [total, setTotal] = React.useState(null)

    const [ctotal, setCtotal] = React.useState(null)

    const [boiler, setBoiler] = React.useState(null)


    useEffect(() => 
        setTotal(suputila * inaltime * 50 / 1000)
    )

    useEffect(() => 
        setCtotal((suputila * inaltime * 50 / 1000) + bai * 2 + bucatarii * 2)
    )

    useEffect(() => 
        setBoiler(persoane*30)
)





    // MULTISTEP FORM STOP


    const { products, compareRemoveItem, cartAddItem } = props;
    const breadcrumb = [
        { title: 'Home', url: '' },
        { title: 'Oferta', url: '' },
    ];

    let content;

    if (products.length) {
        const attributes = [];

        products.forEach((product) => product.attributes.forEach((productAttribute) => {
            let attribute = attributes.find((x) => x.name === productAttribute.name);

            if (!attribute) {
                attribute = {
                    name: productAttribute.name,
                    values: {},
                };
                attributes.push(attribute);
            }

            attribute.values[product.id] = productAttribute.values.map((x) => x.name).join(', ');
        }));

        const productInfoRow = products.map((product) => {
            let image;

            if (product.images.length > 0) {
                image = (
                    <div className="compare-table__product-image product-image">
                        <div className="product-image__body">
                            <img className="product-image__img" src={product.images[0]} alt="" />
                        </div>
                    </div>
                );
            }

            return (
                <td key={product.id}>
                    <Link to={url.product(product)} className="compare-table__product-link">
                        {image}
                        <div className="compare-table__product-name">{product.name}</div>
                    </Link>
                </td>
            );
        });

        const ratingRow = products.map((product) => (
            <td key={product.id}>
                <div className="compare-table__product-rating">
                    <Rating value={product.rating} />
                </div>
                <div className=" compare-table__product-rating-legend">
                    {`${product.reviews} Reviews`}
                </div>
            </td>
        ));

        const availabilityRow = products.map((product) => {
            let badge;

            if (product.availability === 'in-stock') {
                badge = <span className="compare-table__product-badge badge badge-success">In stoc</span>;
            }

            return <td key={product.id}>{badge}</td>;
        });

        const priceRow = products.map((product) => (
            <td key={product.id}>
                <Currency value={product.price} />
            </td>
        ));

        const addToCartRow = products.map((product) => {
            const renderButton = ({ run, loading }) => {
                const classes = classNames('btn btn-primary', {
                    'btn-loading': loading,
                });

                return <button type="button" onClick={run} className={classes}>Add To Cart</button>;
            };

            return (
                <td key={product.id}>
                    <AsyncAction
                        action={() => cartAddItem(product)}
                        render={renderButton}
                    />
                </td>
            );
        });

        const attributeRows = attributes.map((feature, index) => {
            const rows = products.map((product) => (
                <td key={product.id}>{feature.values[product.id]}</td>
            ));

            return (
                <tr key={index}>
                    <th>{feature.name}</th>
                    {rows}
                </tr>
            );
        });

        const removeRow = products.map((product) => {
            const renderButton = ({ run, loading }) => {
                const classes = classNames('btn btn-secondary btn-sm', {
                    'btn-loading': loading,
                });

                return <button type="button" onClick={run} className={classes}>Remove</button>;
            };

            return (
                <td key={product.id}>
                    <AsyncAction
                        action={() => compareRemoveItem(product.id)}
                        render={renderButton}
                    />
                </td>
            );
        });

        content = (
            <div className="block">



                <div className="container">
                    { formStep=== 0 && (
                    <>
                    <div className="custom-offer-wrapper">
                    <div onClick={completeFormStep1} className="offer-button-right">
                        <span>PERSONALIZEAZA</span>
                        <p className="test">Centrala Termica <br/>regim ACM instant</p>
                        <button type="button" class="btn btn-primary">Configureaza Acum</button>
                    </div>
                    <div onClick={completeFormStep2} className="offer-button-left">
                        <span>PERSONALIZEAZA</span>
                        <p className="test">Centrala Termica  <br/>preparare ACM boiler extern</p>
                        <button type="button" class="btn btn-primary">Configureaza Acum</button>
                    </div>
                    </div>
                    </>
                    )}
                    { formStep=== 1 && (
                        <form>
                            <label for="basic-url">Ce suprafata utila are casa dvs ?</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >MP</span>
                                </div>
                                <input type="number" class="form-control"  aria-describedby="basic-addon3" value={suputila} onChange={getSupUtila} required/>
                            </div>

                            <label for="basic-url">Ce inaltime medie au incaperile dvs.?</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >M</span>
                                </div>
                                <input type="number" class="form-control"  aria-describedby="basic-addon3" value={inaltime} onChange={getInaltime} required/>
                            </div>
                            <label>Puterea CT necesara este <strong>{total} KW</strong></label>

                            { total > 0 && (
                                <>
                                    <div>Centrale recomandate :</div>
                                    <table className="compare-table">
                                        <tbody>
                                            <tr>
                                                <th>Product</th>
                                                {productInfoRow}
                                            </tr>
                                            <tr>
                                                <th>Rating</th>
                                                {ratingRow}
                                            </tr>
                                            <tr>
                                                <th>Availability</th>
                                                {availabilityRow}
                                            </tr>
                                            <tr>
                                                <th>Price</th>
                                                {priceRow}
                                            </tr>
                                            <tr>
                                                <th>Add To Cart</th>
                                                {addToCartRow}
                                            </tr>
                                            {attributeRows}
                                            <tr>
                                                <th aria-label="Remove" />
                                                {removeRow}
                                            </tr>
                                        </tbody>
                                    </table>
                                </> 
                        )}
                        


                        </form>
                    )}
                    { formStep=== 2 && (
                        <form>
                            <label for="basic-url">Ce suprafata utila are casa dvs ?</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >MP</span>
                                </div>
                                <input type="number" class="form-control"  aria-describedby="basic-addon3" value={suputila} onChange={getSupUtila} required/>
                            </div>

                            <label for="basic-url">Ce inaltime medie au incaperile dvs.?</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >M</span>
                                </div>
                                <input type="number" class="form-control"  aria-describedby="basic-addon3" value={inaltime} onChange={getInaltime} required/>
                            </div>

                            <label for="basic-url">Cate bai aveti?</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Buc</span>
                                </div>
                                <input type="number" class="form-control"  aria-describedby="basic-addon3" value={bai} onChange={getBai} required/>
                            </div>

                            <label for="basic-url">Cate bucatarii aveti?</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Buc</span>
                                </div>
                                <input type="number" class="form-control"  aria-describedby="basic-addon3" value={bucatarii} onChange={getBucatarii} required/>
                            </div>

                            <label for="basic-url">Pentru boiler separat de centrala termica va rugam sa mentionati cate persoane locuiesc in cladire?{persoane}</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Pers</span>
                                </div>
                                <input type="number" class="form-control"  aria-describedby="basic-addon3" value={persoane} onChange={getPersoane} required/>
                            </div>


                            <label>Puterea CT necesara este <strong>{ctotal} KW</strong></label><br/>
                            <label>Daca doresti CT doar pentru incalzire si preparare apa calda prin boiler, ai nevoie de un boiler de: <strong>{boiler} litri</strong></label>

                            { ctotal > 0 && bai > 0 && bucatarii > 0 &&  (
                                <>
                                <div>Centrale recomandate :</div>
                                    <table className="compare-table">
                                        <tbody>
                                            <tr>
                                                <th>Product</th>
                                                {productInfoRow}
                                            </tr>
                                            <tr>
                                                <th>Rating</th>
                                                {ratingRow}
                                            </tr>
                                            <tr>
                                                <th>Availability</th>
                                                {availabilityRow}
                                            </tr>
                                            <tr>
                                                <th>Price</th>
                                                {priceRow}
                                            </tr>
                                            <tr>
                                                <th>Add To Cart</th>
                                                {addToCartRow}
                                            </tr>
                                            {attributeRows}
                                            <tr>
                                                <th aria-label="Remove" />
                                                {removeRow}
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                            )}
                        </form>
                    )}
                </div>





            </div>
        );
    } else {
        content = (
            <div className="block block-empty">
                <div className="container">
                    <div className="block-empty__body">
                        <div className="block-empty__message">Cauta acum produsul perfect pentru tine!</div>
                        <div className="block-empty__actions">
                            <Link to="/" className="btn btn-primary btn-sm">Continue</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Compare Products Page — ${theme.name}`}</title>
            </Helmet>

            <PageHeader header="Oferta" breadcrumb={breadcrumb} />

            {content}
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    products: state.compare,
});

const mapDispatchToProps = {
    cartAddItem,
    compareRemoveItem,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShopPageCompare);
