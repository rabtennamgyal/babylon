import { useEffect, useState } from 'react'
import data from '../Asset/data/imgData'
import img from '../Asset/123.png'

const Home = ({openModal}) => {
    const [current, setCurrent] = useState(0)
    const length = data.length

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className='home'>
            <div className='top'>
                <div className='one'>
                    <div className='title'>
                        <h1>
                            Babylon helps you to grow your Wealth.
                        </h1>
                        <h3>
                            Take control of your Life by taking control of 
                            your Wealth. 
                        </h3>
                    </div>
                    <div className='btn'>
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
                <div className='one'>
                    <h1>Grow Your Empire</h1>
                    <p>
                        In under 5 Minutes, set up your Investment Account.
                        You can also set up a Checking Account. Grow your
                        wealth, with Babylon; you will be beating inflation
                        everyday.
                    </p>
                </div>

                <div className='two'>
                    <div className='card'>
                        <div className='container'>
                            <div className='box'>
                                <i className="far fa-smile-wink"></i>
                                <h1>Easy</h1>
                            </div>
                            <p>
                                Invest your money automatically, set aside 
                                money from each paycheck, earn more and get 
                                money tips on the go.
                            </p>
                        </div> 
                        <div className='container'>
                            <div className='box'>
                                <i className="far fa-thumbs-up"></i>
                                <h1>Smart</h1>
                            </div>
                            <p>
                                Access smart portfolios designed by 
                                the experts, that adjust automatically
                                as you and your money grow.
                            </p>
                        </div>
                        <div className='container'>
                            <div className='box'>
                                <i className="fas fa-lock"></i>
                                <h1>Trusted</h1>
                            </div>
                            <p>
                                Backed by leading investors and 
                                innovators, from Blackrock to CNBC,
                                and chosen by more than 8 Million people.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom'>
                <div className='img'>
                    <i id='lock' className="fas fa-chess-rook"></i>
                </div>

                <div className='text'>
                    <div className='item'>
                        <h1>
                            Our security is as strong as a <span id='fort'>Fort.</span>
                        </h1>
                        <p>
                            We use Bank-level security, 256-bit
                            encryption, and allow two-factor authentication
                            for added security.
                        </p>
                    </div>
                </div>
            </div>

            <div className='slider'>
                <div className='one'>
                    <div onClick={prev} className='left'>
                        <p onClick={prev}>&larr;</p>
                    </div>
    
                    <div className='slides'>
                        {data.map((el, i) => {
                            return (
                                <div id='el' className={i === current ? 'active' : 'slide'} key={i}>
                                    {i === current && (<img src={el.img} />)}
                                    {i === current && (<p id='text'>{el.text}</p>)}
                                </div>
                            )
                        })}
                    </div>
    
                    <div onClick={next} className='right'>
                        <p onClick={next}>&rarr;</p>
                    </div>
                </div>

                <div className='two'>
                    <div>
                        <h1>
                            Grow your Knowledge
                        </h1>
                        <p>
                            Original money tips and tricks developed
                            for you by Babylon and CNBC. The more you 
                            know, the more you grow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home