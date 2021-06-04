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
                </div>
            </div>
        </div>
    )
}

export default Bank