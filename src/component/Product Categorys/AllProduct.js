import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleAddToCart } from '../Redux Slice/CartSlice';

const Product = () => {

    const items = useSelector((state) => state.allCart.products)
    const dispatch = useDispatch();

    return (
        <div className='container p-0'>
            <div div className='row g-5'>

                {
                    items.map((item) => (
                        <div key={item.id} className='col-md-4'>
                            <div className="card shadow" >
                                <Link to={`/product-details/${item.id}`}>
                                    <img className='card-img-top' src={item.img} alt="" />
                                </Link>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <p className='card-text'>Price: <span className='fw-bold'>${item.price}</span></p>
                                    <p className='card-text'>Seller: {item.seller}</p>
                                    <p className='card-text'>Rating: {item.ratings} stars</p>
                                </div>
                                <button 
                                type='button' onClick={ () => dispatch (handleAddToCart(item))} className='btn btn-warning'>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;