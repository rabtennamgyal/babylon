const SignUp = () => {
    return (
        <div className='signup'>
            <div className='one'>
                <div className='content'>
                    <h1>
                        Create account
                    </h1>
                    <p>
                        Babylon is your guide to financial wellness. We'll 
                        help you invest, save and spend money.
                    </p>
                    <div className='end'>
                        <i class="fas fa-lock"></i>
                        <h1>
                            Protected by bank-level security.
                        </h1>
                    </div>
                </div>
            </div>
            <div className='two'>
                <div className='content'>
                    <div className='subs'>
                        <div className='a box'>
                            <form>
                                <label>
                                    Email: 
                                </label>
                                <input 
                                    type='text'
                                />
                            </form>
                        </div>
                        <div className='b box'>
                            <form>
                                <label>
                                    Password: 
                                </label>
                                <input 
                                    type='text'
                                />
                            </form>
                        </div>
                    </div>
                    <div className='btn'>
                        <button>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp