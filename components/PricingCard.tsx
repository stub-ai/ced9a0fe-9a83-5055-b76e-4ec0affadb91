import React from 'react';

interface Plan {
  name: string;
  price: number;
  features: string[];
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg">
      <h2 className="font-bold text-2xl mb-4">{plan.name}</h2>
      <h3 className="font-bold text-xl mb-4">${plan.price}/month</h3>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-blue-500 text-white rounded p-2">Sign Up</button>
    </div>
  );
};

export default PricingCard;