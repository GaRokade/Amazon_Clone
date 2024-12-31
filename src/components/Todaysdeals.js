import React, { useState, useEffect } from 'react';

const TodaysDeals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Fetch today's deals from Amazon API
    fetch('https://www.amazon.in/deals?ref_=nav_cs_gb')
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

export default TodaysDeals;
