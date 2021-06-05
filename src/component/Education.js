import { useState } from "react"

const Education = () => {
    const [down, setDown] = useState(true)
    const [up, setUp] = useState(false)

    const showPara = () => {
        const para = document.getElementById('stock')
        if (para.style.display === 'none') {
            para.style.display = 'flex'
            setDown(false)
            setUp(true)
        } else {
            para.style.display = 'none'
            setDown(true)
            setUp(false)
        }
    }

    const [down1, setDown1] = useState(true)
    const [up1, setUp1] = useState(false)

    const showPara1 = () => {
        const para = document.getElementById('inflation')
        if (para.style.display === 'none') {
            para.style.display = 'flex'
            setDown1(false)
            setUp1(true)
        } else {
            para.style.display = 'none'
            setDown1(true)
            setUp1(false)
        }
    }

    
    const [down2, setDown2] = useState(true)
    const [up2, setUp2] = useState(false)

    const showPara2  = () => {
        const para = document.getElementById('start')
        if (para.style.display === 'none') {
            para.style.display = 'flex'
            setDown2(false)
            setUp2(true)
        } else {
            para.style.display = 'none'
            setDown2(true)
            setUp2(false)
        }
    }

    const [down3, setDown3] = useState(true)
    const [up3, setUp3] = useState(false)

    const showPara3  = () => {
        const para = document.getElementById('trade')
        if (para.style.display === 'none') {
            para.style.display = 'flex'
            setDown3(false)
            setUp3(true)
        } else {
            para.style.display = 'none'
            setDown3(true)
            setUp3(false)
        }
    }

    const [down4, setDown4] = useState(true)
    const [up4, setUp4] = useState(false)

    const showPara4  = () => {
        const para = document.getElementById('dividend')
        if (para.style.display === 'none') {
            para.style.display = 'flex'
            setDown4(false)
            setUp4(true)
        } else {
            para.style.display = 'none'
            setDown4(true)
            setUp4(false)
        }
    }

    return (
        <div className='education-page'>
            <div className='title'>
                <div className='text'>
                    <h1>
                        Money Basics
                    </h1>
                    <p>
                        All the basics to grow your knowledge
                    </p>
                </div>
            </div>

            <div className='content'>
                <div className='stock box'>
                    <div className='one'>
                        <h1>
                            What is the Stock Market ?
                        </h1>
                        {down && <i onClick={showPara} class="fas fa-arrow-down"></i>}
                        {up && <i onClick={showPara} class="fas fa-arrow-up"></i>}
                    </div>
                    <p id='stock'>
                    The stock market refers to the collection of markets and exchanges where regular 
                    activities of buying, selling, and issuance of shares of publicly-held companies take place. 
                    Such financial activities are conducted through institutionalized formal exchanges or 
                    over-the-counter (OTC) marketplaces which operate under a defined set of regulations. 
                    There can be multiple stock trading venues in a country or a region which allow transactions 
                    in stocks and other forms of securities.
                    </p>
                </div>

                <div className='inflation box'>
                    <div className='one'>
                        <h1>
                            What is Inflation ?
                        </h1>
                        {down1 && <i onClick={showPara1} class="fas fa-arrow-down"></i>}
                        {up1 && <i onClick={showPara1} class="fas fa-arrow-up"></i>}
                    </div>
                    <p id='inflation'>
                    Inflation is the decline of purchasing power of a given currency over time.
                    A quantitative estimate of the rate at which the decline in purchasing power occurs can
                    be reflected in the increase of an average price level of a basket of selected goods 
                    and services in an economy over some period of time. The rise in the general level
                    of prices, often expressed as a percentage, means that a unit of currency effectively
                    buys less than it did in prior periods.
                    </p>
                </div>

                <div className='Start box'>
                    <div className='one'>
                        <h1>
                            How to start Investing ?
                        </h1>
                        {down2 && <i onClick={showPara2} class="fas fa-arrow-down"></i>}
                        {up2 && <i onClick={showPara2} class="fas fa-arrow-up"></i>}
                    </div>
                    <p id='start'>
                    As with any new endeavor, the first steps are often the hardest. But once you get started investing, 
                    you’ll find it’s not as complex as it may seem. Plus, the truth is that investing is the best way to
                    grow your money and achieve your financial goals. Saving alone often isn't enough—inflation can eat 
                    away at your hard-earned cash an leave you with less purchasing power than you started with. 
                    You want to invest to make sure your money keeps up.
                    </p>
                </div>

                <div className='trade box'>
                    <div className='one'>
                        <h1>
                            Trading vs Investing ?
                        </h1>
                        {down3 && <i onClick={showPara3} class="fas fa-arrow-down"></i>}
                        {up3 && <i onClick={showPara3} class="fas fa-arrow-up"></i>}
                    </div>
                    <p id='trade'>
                    Investing and trading are fundamentally the same action, but are executed in different 
                    and for different reasons.One way to think of it: Investing is to trading as a sedan
                    is to a sports car. With the latter pair, both are vehicles, built with the same basic
                    parts and for the same basic purpose—to get you from point A to point B. But the 
                    sedan is typically considered a safe and reliable mode of transportation while the 
                    sports car is considered a fast and exciting ride. Investing and trading share a comparable 
                    relationship.
                    </p>
                </div>

                <div className='dividend box'>
                    <div className='one'>
                        <h1>
                            What are Dividends ?
                        </h1>
                        {down4 && <i onClick={showPara4} class="fas fa-arrow-down"></i>}
                        {up4 && <i onClick={showPara4} class="fas fa-arrow-up"></i>}
                    </div>
                    <p id='dividend'>
                    If you’ve been investing for a while, you may have seen something called a dividend listed on your statement. 
                    (You may have even received a check with “dividend” in the memo line, if you aren’t reinvesting
                    yours, which you probably should be...but more on that later.)Dividends are kind of like the 
                    baker’s dozen of investing, the little extra something you get just for putting your money in 
                    certain companies or funds. They might seem small—in mid-2019, the average dividend payment 
                    for U.S. stocks was 1.87 percent of your investment, according to Siblis Research—but dividends
                    can drastically impact your long-term investment performance.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education