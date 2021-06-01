const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-pinterest"></i>
            </div>

            <div className='main'>
                <div className='contact'>
                    <h1>
                        Have any questions ?
                    </h1>
                    <button>
                        Contact Support
                    </button>
                </div>

                <div className='products'>
                    <h1>Products</h1>
                    <div>
                        <li>Invest for your future</li>
                        <li>Bank online</li>
                        <li>Track your expenses</li>
                    </div>
                </div>

                <div className='who'>
                    <h1>
                        Who we are ?
                    </h1>
                    <div>
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Press</li>
                    </div>
                </div>
            </div>

            <div className='end'>
                <h1>
                    &copy; 2021 Babylon, Inc. All Rights Reserved
                </h1>
            </div>
        </div>
    )
}

export default Footer