import {useState} from 'react'
import {Link} from 'react-router-dom'
import img from '../Asset/card.png'

const Bank = () => {
    const [minus, setMinus] = useState(false)
    const [add, setAdd] = useState(true)

    const showText = () => {
        const text = document.getElementById('content-one')
        if (text.style.display === 'none') {
            text.style.display = 'flex'
            setMinus(true)
            setAdd(false)
        } else {
            text.style.display = 'none'
            setMinus(false)
            setAdd(true)
        }
    }

    const [minus2, setMinus2] = useState(false)
    const [add2, setAdd2] = useState(true)

    const showText2 = () => {
        const text = document.getElementById('content-two')
        if (text.style.display === 'none') {
            text.style.display = 'flex'
            setMinus2(true)
            setAdd2(false)
        } else {
            text.style.display = 'none'
            setMinus2(false)
            setAdd2(true)
        }
    }

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
                        <Link to='/SignUp'>
                            <button>
                                Sign Up
                            </button>
                        </Link>
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
                                    You will get all the features in 
                                    the premium version, expect the MorningStar
                                    Analysis. Ad supported.
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
                                    {add && <i onClick={showText} class="fas fa-plus"></i>}
                                    {minus && <i onClick={showText} class="fas fa-minus"></i>}
                                </div>
                                <div id='content-one' className='content'>
                                    <div className='one'>
                                        <i class="fas fa-chart-line"></i>
                                        <h1>
                                            Invest
                                        </h1>
                                    </div>
                                    <div className='two'>
                                        <ul>
                                            <li>
                                                Put your money to work with round-ups
                                            </li>
                                            <li>
                                                Get personalized latest news 
                                            </li>
                                            <li>
                                                Get access to budget trackers
                                            </li>
                                            <li>
                                                Spend money & earn 20% cash back
                                            </li>
                                        </ul>
                                    </div>
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
                                    firm MorningStar. No Ads.
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
                                    {add2 && <i onClick={showText2} class="fas fa-plus"></i>}
                                    {minus2 && <i onClick={showText2} class="fas fa-minus"></i>}
                                </div>
                                <div id='content-two' className='content'>
                                    <div className='one'>
                                        <i class="fas fa-chart-line"></i>
                                        <h1>
                                            Invest
                                        </h1>
                                    </div>
                                    <div className='two'>
                                        <ul>
                                            <li>
                                                Access to world class stock analysis from Morningstar
                                            </li>
                                            <li>
                                                Access to all features
                                            </li>
                                            <li>
                                                Earn 50% cash back
                                            </li>
                                            <li>
                                                No Ads
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='last'>
                <div className='header'>
                    <h1>
                        See what others have to say
                    </h1>
                </div>
                <div className='main'>
                    <div className='content'>
                        <div className='box'>
                            <p>
                                "Investing is now made for everyone."
                            </p>
                            <h1>
                                Forbes
                            </h1>
                        </div>

                        <div className='box'>
                            <p>
                                "App of the year 2021."
                            </p>
                            <h1>
                                Apple
                            </h1>
                        </div>

                        <div className='box'>
                            <p>
                                "The hard part is putting money aside 
                                but Babylon does it for you."
                            </p>
                            <h1>
                                CNN Money
                            </h1>
                        </div>

                        <div className='box'>
                            <p>
                                "Investing to the most effective way
                                to build wealth and you don't need a 
                                lot of money thanks to Babylon."
                            </p>
                            <h1>
                                CNBC
                            </h1>
                        </div>

                        <div className='box'>
                            <p>
                                "You think Investing is only for 
                                the rick folks, that you need a lot 
                                of money ... not anymore thanks to
                                Babylon."
                            </p>
                            <h1>
                                Good Morning America
                            </h1>
                        </div>

                        
                        <div className='box'>
                            <p>
                                "Babylon is my favorite money app, 
                                it make investment easy and fun."
                            </p>
                            <h1>
                                Business Insider
                            </h1>
                        </div>

                        
                        <div className='box'>
                            <p>
                                "Thanks to Babylon, you can now 
                                invest your money without any hassle."
                            </p>
                            <h1>
                                Yahoo Finance
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bank