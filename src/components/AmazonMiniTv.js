import React, { useState, useEffect } from 'react';

const AmazonMiniTv = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Fetch today's deals from Amazon API
    fetch('https://www.amazon.in/minitv/tp/amzn1.dv.gti.dc89050a-d90a-47cd-8d57-56f1b69d4aa1')
      .then(response => response.json())
      .then(data => setDeals(data))
      .catch(error => console.error('Error fetching today\'s deals:', error));
  }, []);

  return (
    <div>
      <h2>Today's Deals on Amazon</h2>
      <ul>
        {deals.map((deal, index) => (
          <li key={index}>
            {/* Render each deal */}
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
            <p>Price: ${deal.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AmazonMiniTv;
