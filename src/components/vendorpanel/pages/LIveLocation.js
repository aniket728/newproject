import React from 'react';

const SubscriptionPlanPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      name: 'Pro',
      price: '$19.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      name: 'Premium',
      price: '$29.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
  ];

  return (
    <div className="subscription-plan-page">
      <h1>Choose Your Plan</h1>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="subscribe-button">Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlanPage;