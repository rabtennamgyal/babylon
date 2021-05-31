import warren from '../Asset/buffet.jpg_background=000000&cropX1=748&cropX2=3075&cropY1=1753&cropY2=4082';
import jack from '../Asset/bogle.jpg';
import charlie from '../Asset/munger.jpeg';


const Home = () => {


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
                    <div className='left'>
                        <p>&larr;</p>
                    </div>

                <div className='slides'>
                        <div className='box one'>
                            <img class='img' src={warren} />
                            <p>
                                "I use Babylon everyday, the reason I'm the 
                                great Investor I am today is because of Babylon.
                                I Love Babylon."
                            </p>
                        </div>
        
                        <div className='box two'>
                            <img class='img' src={jack} />
                            <p>
                                "If I have to choose between an Index Fund and Babylon,
                                I'll choose Babylon. It is miles better than any Index 
                                Fund, go Babylon."
                            </p>
                        </div>
        
                        <div className='box three'>
                            <img class='img' src={charlie} />
                            <p>
                                "I once told Warren to check out this new site called
                                Babylon. And he did, look where he is now, all thanks to
                                Babylon."
                            </p>
                        </div>
                </div>

                    <div className='right'>
                        <p>&rarr;</p>
                    </div>
            </div>

            <div className='footer'>

            </div>
        </div>
    )
}

export default Home