import React from 'react';

const PlanCard = ({ plan, onSubscribe }) => {
  return (
    <div className={`plan-card ${plan.recommended ? 'recommended' : ''}`}>
      {plan.recommended && <div className="recommended-badge">Recommended</div>}
      <h2>{plan.name}</h2>
      <h3>{plan.price}</h3>
      <p className="plan-description">{plan.description1}</p>
      <p className="plan-description">{plan.description2}</p>
      <p className="plan-description">{plan.description3}</p>
      <p className="plan-description">{plan.description4}</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {/* Conditional button rendering */}
      {plan.name === 'Ultimate' ? (
        <button className="select-button">Contact Us</button>
      ) : (
        <button className="select-button" onClick={() => onSubscribe(plan.name)}>
          Subscribe
        </button>
      )}
    </div>
  );
};

export default PlanCard;