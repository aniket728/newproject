import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component
import PlanCard from './PlanCard'; // Import the PlanCard component


const plans = [
  {
    id: 1,
    name: 'Pro',
    price: '167 ₹/month',
    recommended: false,
    description1: 'Essential plan to begin your sales and distribution journey.',
    description2: '₹ 167 /month/user (Billed Annually)',
    description3: 'Pay ₹ 2000 /year/user',
    description4: 'Pay ₹ 200 /user (billed monthly)',
    features: [
      'Pay as you go',
      'Route Management',
      'Live Location GPS tracking',
      'Attendance',
      'Tally Integration',
      'Single click data export',
      'Brand Management',
    ],
  },
  {
    id: 2,
    name: 'Enterprise',
    price: '333₹ /month',
    recommended: true,
    description1: 'Advanced offerings for fast-growing businesses and startups.',
    description2: '₹ 333 /month/user (Billed Annually)',
    description3: 'Pay ₹ 4000 /year/user',
    description4: 'Pay ₹ 400 /user (billed monthly)',
    features: [
      'Pay as you go',
      'Route Planner',
      'Geofencing',
      'Expense Management',
      'Production Management',
      'Distribution Management',
      'Customizable reports',
    ],
  },
  {
    id: 3,
    name: 'Ultimate',
    price: 'Custom',
    recommended: false,
    description1: 'For teams with more than 50 users. Custom pricing available.',
    features: [], // No features listed for Ultimate
  },
];

const LiveLocation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSubscribe = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h3 className="mx-5 px-3 mt-2 mb-2">Select a plan for your business</h3>
      <div className="plan-cards-container">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} onSubscribe={handleSubscribe} />
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Subscribe to {selectedPlan}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Thank you for subscribing to the ${selectedPlan} plan!`);
            handleCloseModal();
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <button type="submit" className="modal-close-button">
            Confirm Subscription
          </button>
        </form>
      </Modal>
    </>
  );
};

export default LiveLocation;