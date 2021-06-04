import { useState } from 'react'
import img from '../Asset/acct.png'

const Invest = ({openModal}) => {
    const [right, SetRight] = useState(true)
    const [down, SetDown] = useState(false)

    const showText = () => {
        const text = document.getElementById('tOne')
        if (text.style.display === 'none') {
            text.style.display = 'flex'
            SetRight(false)
            SetDown(true)
        } else {
            text.style.display = 'none'
            SetRight(true)
            SetDown(false)
        }
    }

    const [right1, SetRight1] = useState(true)
    const [down1, SetDown1] = useState(false)

    const showText1 = () => {
        const text = document.getElementById('tTwo')
        if (text.style.display === 'none') {
            text.style.display = 'flex'
            SetRight1(false)
            SetDown1(true)
        } else {
            text.style.display = 'none'
            SetRight1(true)
            SetDown1(false)
        }
    }

    const [right2, SetRight2] = useState(true)
    const [down2, SetDown2] = useState(false)

    const showText2 = () => {
        const text = document.getElementById('tThree')
        if (text.style.display === 'none') {
            text.style.display = 'flex'
            SetRight2(false)
            SetDown2(true)
        } else {
            text.style.display = 'none'
            SetRight2(true)
            SetDown2(false)
        }
    }

    const [right3, SetRight3] = useState(true)
    const [down3, SetDown3] = useState(false)

    const showText3 = () => {
        const text = document.getElementById('tFour')
        if (text.style.display === 'none') {
            text.style.display = 'flex'
            SetRight3(false)
            SetDown3(true)
        } else {
            text.style.display = 'none'
            SetRight3(true)
            SetDown3(false)
        }
    }

    const [right4, SetRight4] = useState(true)
    const [down4, SetDown4] = useState(false)

    const showText4 = () => {
        const text = document.getElementById('tFive')
        if (text.style.display === 'none') {
            text.style.display = 'flex'
            SetRight4(false)
            SetDown4(true)
        } else {
            text.style.display = 'none'
            SetRight4(true)
            SetDown4(false)
        }
    }

    return (
        <div className='invest'>
            <div className='one'>
                <div className='divOne'>
                    <div className='intro'>
                        <h1>
                            Babylon Investment Account
                        </h1>
                        <h2>
                            Join more than 23 Million people who
                            have saved and invested.
                        </h2>
                        <ul>
                            <div className='list'>
                                <i class="fas fa-check"></i><li>100% Free (with ads)</li>
                            </div>
                            <div className='list'>
                                <i class="fas fa-check"></i><li>$9.99 each month for No Ads</li>
                            </div>
                            <div className='list'>
                                <i class="fas fa-check"></i><li>See your Performance</li>
                            </div>
                        </ul>
                        <button onClick={openModal}>
                            Get Started
                        </button>
                    </div>
                </div>

                <div className='divTwo'>
                    <img className='phone-img' src={img} />
                </div>
            </div>

            <div className='two'>
                <h1>
                    What you get with Babylon ?
                </h1>
                <div className='features'>
                    { /* Container Number Three */}
                        <div className='box round-up'>
                            <div className='item'>
                                <i class="fas fa-chart-pie"></i>
                                <h2>
                                    Diversified portfolios by AI
                                </h2>
                            </div>
                            <div className='arrow'>
                                {right2 && <i onClick={showText2} class="fas fa-arrow-right"></i>}
                                {down2 && <i onClick={showText2} class="fas fa-arrow-down"></i>}
                            </div>
                            <div className='text' id='tThree'>
                                <div className='text-box'>
                                    <p>
                                        For as little as $1, invest in a well diversified portfolios
                                        built by our AI. The stocks are picked by our AI and the 
                                        goal is to built a portfolios that generates income for 
                                        the owner. Stocks targeted by our AI are mostly well-positioned
                                        blue chip companies with strong dividends and good balance sheet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/* Container Number Five*/}
                        <div className='box round-up'>
                            <div className='item'>
                                <i class="far fa-credit-card"></i>
                                <h2>
                                    Earn Cash back & Rewards
                                </h2>
                            </div>
                            <div className='arrow'>
                                {right4 && <i onClick={showText4} class="fas fa-arrow-right"></i>}
                                {down4 && <i onClick={showText4} class="fas fa-arrow-down"></i>}
                            </div>
                            <div className='text' id='tFive'>
                                <div className='text-box'>
                                    <p>
                                        Use our credit card with no hidden fees, no minimum balance 
                                        and no annual fees. Earn 20% cash back every month and 
                                        build up points to earn free purchases at our selected 
                                        stores.
                                    </p>
                                </div>
                            </div>
                        </div>
                    { /* Container Number One */}
                        <div className='box education'>
                            <div className='item'>
                                <i class="fas fa-book-open"></i>
                                <h2>
                                    Education & Information
                                </h2>
                            </div>
                            <div className='arrow'>
                                {right && <i onClick={showText} class="fas fa-arrow-right"></i>}
                                {down && <i onClick={showText} class="fas fa-arrow-down"></i>}
                            </div>
                            <div className='text' id='tOne'>
                                <div className='text-box'>
                                    <p>
                                        Knowledge is Power. And we want to help you
                                        keep growing your financial literacy, all in 
                                        one App. We also provide personalized financial 
                                        news, so you can keep up with the latest in the 
                                        Business world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    { /* Container Number Two */}
                        <div className='box round-up'>
                            <div className='item'>
                                <i class="fas fa-coins"></i>
                                <h2>
                                    Round-up spare change
                                </h2>
                            </div>
                            <div className='arrow'>
                                {right1 && <i onClick={showText1} class="fas fa-arrow-right"></i>}
                                {down1 && <i onClick={showText1} class="fas fa-arrow-down"></i>}
                            </div>
                            <div className='text' id='tTwo'>
                                <div className='text-box'>
                                    <p>
                                        Automatically invest your spare change from everyday
                                        purchases like gas and groceries, while you go about
                                        your day. We invest it in stocks you have chosen, and 
                                        if you haven't; then we invest it in the S&P 500.
                                    </p>
                                </div>
                            </div>
                        </div>
                    { /* Container Number Four */}
                        <div className='box round-up'>
                            <div className='item'>
                                <i class="fas fa-recycle"></i>
                                <h2>
                                    Recurring Investments
                                </h2>
                            </div>
                            <div className='arrow'>
                                {right3 && <i onClick={showText3} class="fas fa-arrow-right"></i>}
                                {down3 && <i onClick={showText3} class="fas fa-arrow-down"></i>}
                            </div>
                            <div className='text' id='tFour'>
                                <div className='text-box'>
                                    <p>
                                        Set an easy, automatic recurring investment starting at just
                                        $5 a day, so tap into the power of dollar cost averaging. 
                                        If researching and looking into stock one by one isn't your
                                        thing than just let our AI handle it.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Container ends here */}
                </div>
            </div>
        </div>
    )
}

export default Invest