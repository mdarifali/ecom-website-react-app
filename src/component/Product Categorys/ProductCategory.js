import React from 'react';
import AllProduct from './AllProduct';
import MenPants from './MenPants';
import MenShoes from './MenShoes';

const ProductCategory = () => {
    return (
        <div className='container my-5 p-0'>
            {/* <!-- Tabs navs --> */}
            <ul class="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link active"
                        id="ex3-tab-1"
                        data-mdb-toggle="tab"
                        href="#ex3-tabs-1"
                        role="tab"
                        aria-controls="ex3-tabs-1"
                        aria-selected="true"
                    >Link</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="ex3-tab-2"
                        data-mdb-toggle="tab"
                        href="#ex3-tabs-2"
                        role="tab"
                        aria-controls="ex3-tabs-2"
                        aria-selected="false"
                    >Very very very very long link</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="ex3-tab-3"
                        data-mdb-toggle="tab"
                        href="#ex3-tabs-3"
                        role="tab"
                        aria-controls="ex3-tabs-3"
                        aria-selected="false"
                    >Another link</a
                    >
                </li>
            </ul>
            {/* <!-- Tabs navs --> */}

            {/* <!-- Tabs content --> */}
            <div class="tab-content" id="ex2-content">
                <div
                    class="tab-pane fade show active"
                    id="ex3-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-1"
                >
                    Tab 1 content
                </div>
                <div
                    class="tab-pane fade"
                    id="ex3-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-2"
                >
                    Tab 2 content
                </div>
                <div
                    class="tab-pane fade"
                    id="ex3-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex3-tab-3"
                >
                    Tab 3 content
                </div>
            </div>
            {/* <!-- Tabs content --> */}
        </div>
    );
};

export default ProductCategory;