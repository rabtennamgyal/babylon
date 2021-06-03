import img from '../Asset/acct.png'

const Invest = () => {
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
                        <button>
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
                    What features do you get with Babylon ?
                </h1>
                <div className='features'>
                    <div className='box education'>
                        <div className='item'>
                            <i class="fas fa-book-open"></i>
                            <h2>
                                Education & Information
                            </h2>
                        </div>
                        <div className='arrow'>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className='box round-up'>
                        <div className='item'>
                            <i class="fas fa-coins"></i>
                            <h2>
                                Round-up spare change
                            </h2>
                        </div>
                        <div className='arrow'>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invest