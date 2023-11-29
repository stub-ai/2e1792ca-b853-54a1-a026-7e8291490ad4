import { useState } from 'react';

const AnomalyFeedback = () => {
  const [feedback, setFeedback] = useState('');
  const [anomalyType, setAnomalyType] = useState('falsePositive');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/anomalyFeedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback, anomalyType }),
    });

    if (response.ok) {
      setFeedback('');
      alert('Thank you for your feedback!');
    } else {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="feedback">Your Feedback:</label>
      <textarea
        id="feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <label htmlFor="anomalyType">Anomaly Type:</label>
      <select
        id="anomalyType"
        value={anomalyType}
        onChange={(e) => setAnomalyType(e.target.value)}
      >
        <option value="falsePositive">False Positive</option>
        <option value="falseNegative">False Negative</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AnomalyFeedback;