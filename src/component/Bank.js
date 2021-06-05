import img from '../Asset/card.png'

const Bank = () => {
    return (
        <div className='bank'>
            <div className='top'>
                <div className='one'>
                    <div className='content'>
                        <h1>
                            Get Babylon Card
                        </h1>
                        <h2>
                            We provid two checking accounts. One for your daily expenditure 
                            and the other one to transfer money to your brokerage account.
                        </h2>
                        <button>
                            Sign Up
                        </button>
                    </div>
                </div>
    
                <div className='two'>
                    <img src={img} />
                </div>
            </div>

            <div className='mid'>
                <div className='title'>
                    <h1>
                        The future is yours
                    </h1>
                </div>
                <div className='content'>
                    <div className='box one'>
                        <i class="fas fa-bolt"></i>
                        <h1>
                            Get all your personal checking, investment 
                            & retirement account in one place.
                        </h1>
                    </div>
                    <div className='box two'>
                        <i class="fas fa-credit-card"></i>
                        <h1>
                            A platinum debit card with a matte purple 
                            finish & your signature custom engraved.
                        </h1>
                    </div>
                    <div className='box three'>
                        <i class="fas fa-university"></i>
                        <h1>
                            All digital banking, with direct deposit,
                            mobile check deposit, check sending, and more.
                        </h1>
                    </div>
                    <div className='box four'>
                        <i class="far fa-smile-wink"></i>
                        <h1>
                            Instantly invest spare change & save from no
                            hiddin fees with over 55,000 fee-free ATMs.
                        </h1>
                    </div>
                    <div className='box five'>
                        <i class="fas fa-lock"></i>
                        <h1>
                            FDIC-insured all the way tp $250,000, plus
                            fraud protection and all digital card lock.
                        </h1>
                    </div>
                    <div className='box six'>
                        <i class="fas fa-money-bill-wave"></i>
                        <h1>
                            Smart Deposit built in - automatically set aside 
                            money before you spend it.
                        </h1>
                    </div>
                </div>
            </div>
            <div className='end'>
                <div className='header'>
                    <h1>
                        Simple, transparent Plans
                    </h1>
                    <p>
                        We offer two different plans, a free one 
                        & a premium one.
                    </p>
                </div>
                <div className='content'>
                    <div className='free box'>
                        <div className='container one'>
                            <h1>
                                Free
                            </h1>
                            <h3>
                                Ad Supported
                            </h3>
                        </div>
                        <div className='text'>
                            <div className='one'>
                                <p>
                                    You will get all the features included in 
                                    the premium version, expect the MorningStar
                                    Analysis. Free versions are Ad supported.
                                </p>
                                <button>
                                    Sign Up
                                </button>
                            </div>
                            <div className='two'>
                                <div className='title'>
                                    <h1>
                                        What's included
                                    </h1>
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='premium box'>
                        <div className='container two'>
                            <h1>
                                Premium
                            </h1>
                            <h3>
                                $9.99 a month
                            </h3>
                        </div>
                        <div className='text'>
                            <div className='one'>
                                <p>
                                    You will have access to great stock 
                                    analysis from the prestigious financial
                                    firm MorningStar. Plus, no ads.
                                </p>
                                <button>
                                    Sign Up
                                </button>
                            </div>
                            <div className='two'>
                                <div className='title'>
                                    <h1>
                                        What's included
                                    </h1>
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='last'>

            </div>
        </div>
    )
}

export default Bank