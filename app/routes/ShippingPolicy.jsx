import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function shippingPolicy() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'black' }}>
        <div className="container py-4" >
          <h1 className="py-4 text-light">Shipping Policy</h1>
          <div>
            <p>
              <strong></strong>
              <span className='text-light'>
                We deliver your order within 2-3 working days post-dispatch in A-1
                and A-2 Metros (New Delhi, Mumbai, Kolkata, Bengaluru, Chennai,
                Pune, Ahmedabad and Hyderabad).
              </span>
            </p>
            <p>
              <span className='text-light'>
                For the rest of the cities, we deliver between 2-5 business days.
                Delivery by ground takes a little longer than air couriers.
                Ground-shipped orders are delivered to you between 5-7 business
                days post-dispatch. Deliveries to very remote locations such as
                North East may take up to 7 business days or longer, depending on
                the location's geographical constraints.
              </span>
            </p>
            <p>
              <span className='text-light'>
                We deliver most of our orders through our courier partners such as
                Bluedart, FedEx and Delhivery. For a few remote locations where
                there is no other courier service available, we use India Post to
                deliver your orders.
              </span>
            </p>
            <div className="panel panel-default">
              <div id="collapse14" className="panel-collapse collapse">
                <div className="panel-body">
                  <p className='text-light'>
                    We deliver an order free of cost at your doorstep. Express
                    shipping (via air) has an additional cost of flat&nbsp;INR 230/-
                  </p>
                  <p>
                    Note: Certain additional procedures like state-wise taxes may
                    apply to your order depending upon your order type, the utility
                    of your order, the order size, and the state/region the order
                    is being delivered to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default shippingPolicy;
