import React from 'react';


const Payment = () => {
    setTimeout(() => {
        window.location.href = '/';
    }, 3000);
    return (
        <div className="d-flex justify-content-center align-items-center" style={{
            height: '80vh'
        }}>
            <div className="col-md-4">
                <div className="card  bg-white shadow p-5">
                    <div className="mb-4 text-center">
                        
                    </div>
                    <div className="text-center">
                        <h1>Thank You !</h1>
                        <p>
                            Your payment was successful, you will be redirected to home page in 3 seconds.
                        </p>
                        <button className="btn btn-outline-success">Back Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;