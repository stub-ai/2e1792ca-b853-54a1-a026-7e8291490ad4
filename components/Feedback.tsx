import { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback }),
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Feedback;